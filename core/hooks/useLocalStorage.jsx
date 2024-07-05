"use client";
import { useState } from "react";
import pkg from "@/pkg";
import logger from "@/log";

const prefix = `transform:${pkg.version}:`;

/**
 * The `useLocalStorage` function is a custom React hook that allows you to store and retrieve values
 * from local storage in a React component.
 * @returns The `useLocalStorage` function returns an array with two elements: `storedValue` and
 * `setValue`.
 */

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item =
        typeof window !== "undefined"
          ? window.localStorage.getItem(prefix + key) || initialValue
          : initialValue;
      // Parse stored json or if none return initialValue
      return JSON.parse(item);
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined")
        window.localStorage.setItem(prefix + key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      logger.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
