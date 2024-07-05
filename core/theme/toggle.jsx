"use client";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { textAppName } from "@/constants";
import { ChakraIcon } from "@/components";
import PropTypes from "prop-types";
import { appTheme } from "@/config";

/**
 * The Toggle component is a button that toggles between light and dark themes in a React application.
 * @returns The Toggle component is returning an IconButton component.
 */

function Toggle(props) {
  const { userTheme } = props;

  // Chakra UI hook that toggle the color mode

  const { colorMode, toggleColorMode } = useColorMode();

  const theme = colorMode ?? userTheme;

  const toggleTheme = () => {
    const rootElement = document.getElementById(textAppName);
    if (rootElement.classList.contains(appTheme.dark)) {
      rootElement.classList.add(appTheme.light);
      rootElement.classList.remove(appTheme.dark);
    } else {
      rootElement.classList.add(appTheme.dark);
      rootElement.classList.remove(appTheme.light);
    }
  };

  return (
    <IconButton
      aria-label="Theme Change"
      title={`${theme?.charAt(0).toUpperCase() + theme?.slice(1)} theme`}
      aria-describedby="The toggle switch or icon will be used to change the site theme"
      onClick={() => {
        toggleColorMode();
        toggleTheme(theme);
      }}
    >
      {theme === appTheme.dark ? (
        <ChakraIcon iconName="moon" />
      ) : (
        <ChakraIcon iconName="sun" />
      )}
    </IconButton>
  );
}

Toggle.propTypes = {
  userTheme: PropTypes.string,
};

export default Toggle;
