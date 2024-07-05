"use client";
import React from "react";
import PropTypes from "prop-types";
import { usePathname } from "@/components/navigation/link";

/**
 * `Main` is the main layout component for the web page.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The main content of the page.
 * @example
 * <Main>
 *   {/* Main content goes here *\/}
 * </Main>
 */

export default function Main({ children}) {

  const currentPath = usePathname();

  return (
    <main className="h-full flex justify-center w-full m-auto">
      <section className="w-full">
          {children}
      </section>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};
