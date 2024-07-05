"use client";
import { useEffect, useState } from "react";

/**
 * The usePageLoaded function is a custom React hook that tracks whether the page has finished loading
 * or not.
 * @returns The `usePageLoaded` function returns an object with two properties: `isLoaded` and
 * `setLoading`.
 */

const usePageLoaded = () => {
  const [isLoaded, setLoading] = useState(false);
  useEffect(() => setLoading(true), [isLoaded]);
  return { isLoaded, setLoading };
};

export default usePageLoaded;
