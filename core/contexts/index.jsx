"use client";
import { createContext } from "react";

/**
 * AppContext: A context object for sharing general application-level data between components.
 */
export const AppContext = createContext();

/**
 * StoreContext: A context object for sharing data related to store or state management between components.
 */
export const StoreContext = createContext();

/**
 * ComponentsContext: A context object for sharing data related to components between components.
 */
export const ComponentsContext = createContext();

/**
 * UserContext: A context object for sharing data related to the user between components.
 */
export const UserContext = createContext();

/**
 * BlogContext: A context object for sharing data related to a blog between components.
 */
export const BlogContext = createContext();

/**
 * ToolsContext: A context object for sharing data related to tools between components.
 */
export const ToolsContext = createContext();
