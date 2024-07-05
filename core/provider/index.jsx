"use client";
import React from "react";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import "@/theme/globals.css";
import { AppContext } from "@/contexts";
import * as utils from "@/utils";
import * as constants from "@/constants";
import { ChakraThemeProvider } from "@/theme";
import { ConstructionPage, MaintenancePage } from "@/components";
import { queryClient } from "@/endpoints/factory";
import config, { environment } from "@/config";

/**
 * The ChakraProvider function is a React component that provides context and theme settings to its
 * children components.
 * @returns The ChakraProvider component is returning a JSX structure that includes multiple nested
 * components. The structure includes the following components:
 */

export function ChakraProvider({ children, userTheme }) {
  /* The line `export const queryClient = new QueryClient();` is creating a new instance of the
`QueryClient` class and exporting it as a constant named `queryClient`. This `QueryClient` instance
is used for managing and caching data fetched from an API using React Query. It allows for efficient
data fetching, caching, and synchronization with the server. */

  return (
    <AppContext.Provider value={{ ...utils, ...constants, useQuery }}>
        <ChakraThemeProvider userTheme={userTheme}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ChakraThemeProvider>
    </AppContext.Provider>
  );
}

ChakraProvider.propTypes = {
  children: PropTypes.node.isRequired,
  userTheme: PropTypes.string,
};
