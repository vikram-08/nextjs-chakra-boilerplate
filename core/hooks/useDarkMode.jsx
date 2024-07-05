"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "__transform_tools_isDarkMode";

/**
 * The `useDarkMode` function is a custom React hook that manages the state of a dark mode toggle and
 * persists the state in local storage.
 * @returns The `useDarkMode` function returns an object with two properties: `isDarkMode` and
 * `toggleDarkMode`.
 */

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    /** Persist in local storage */
    localStorage.setItem(STORAGE_KEY, JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    /** Use persisted local storage value if present */
    setIsDarkMode(JSON.parse(localStorage.getItem(STORAGE_KEY) || "false"));
  }, []);

  return { isDarkMode, toggleDarkMode };
}

export default useDarkMode;
