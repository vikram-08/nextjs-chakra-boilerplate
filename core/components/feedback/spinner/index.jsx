import React from "react";
import { Spinner as ChakraSpinner, Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * `Spinner` component for displaying a loading spinner.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.label="Loading..."] - The loading text for accessibility.
 * @param {string} [props.size="md"] - The size of the spinner. (ex: "xs", "sm", "md", "lg", "xl")
 * @param {string} [props.speed="0.45s"] - The speed of the spinner.
 * @param {string} [props.thickness="2px"] - The thickness of the spinner.
 * @param {string} [props.variant="basic"] - The variant of the spinner.
 */
export default function Spinner({ label, size, speed, thickness, variant }) {
  return (
    <Box textAlign="center">
      <ChakraSpinner
        size={size}
        speed={speed}
        thickness={thickness}
        variant={variant}
      />
      <Text mt={2} fontWeight="semibold">
        {label}
      </Text>
    </Box>
  );
}

// Define PropTypes for the Progress component
Spinner.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  speed: PropTypes.string,
  thickness: PropTypes.string,
  variant: PropTypes.string,
};
