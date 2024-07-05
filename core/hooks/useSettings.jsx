import useLocalStorage from "@/hooks/useLocalStorage";

/**
 * The `useSettings` function returns a hook that allows you to store and retrieve settings in local
 * storage.
 * @returns The `useSettings` function returns the result of calling the `useLocalStorage` function
 * with the provided `name` and `initialValue` arguments.
 */

export function useSettings(name, initialValue) {
  return useLocalStorage(`settings:${name}`, initialValue);
}

export default useSettings;
