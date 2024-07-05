import React from "react";
import {
  ChakraProvider,
  extendTheme,
  createCookieStorageManager,
} from "@chakra-ui/react";
import "@/theme/globals.css";
import { cssClassPrefix } from "@/constants";
import components from "@/theme/components";
import { colors } from "@/theme/colors";
import "highlight.js/styles/github-dark-dimmed.css";

/**
 * The `ChakraThemeProvider` function is a React component that provides a Chakra UI theme to its
 * children, allowing them to access and use the theme's colors and components.
 * @returns The ChakraThemeProvider component is returning a JSX element. The JSX element is a
 * composition of the CacheProvider component and the ChakraProvider component. The ChakraProvider
 * component is passed the theme and colorModeManager props. The children prop is rendered as the
 * content of the ChakraProvider component.
 */

const cookiesStorage = createCookieStorageManager(`${cssClassPrefix}Theme`);

export function ChakraThemeProvider({ userTheme, children }) {
  // ! Do not pass the theme here. It will create a theme flicker.
  const config = {
    cssVarPrefix: cssClassPrefix,
    initialColorMode: userTheme,
    useSystemColorMode: false,
  };

  const theme = extendTheme({
    colors,
    config,
    components,
  });

  return (
    <ChakraProvider theme={theme} colorModeManager={cookiesStorage}>
      {children}
    </ChakraProvider>
  );
}
