import React from "react";
import { Text, Heading as ChakraHeading } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Heading component for displaying styled text.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} [props.children] - The content to be displayed as the heading text.
 * @param {string} [props.color='error'] - The color of the heading text.
 * @returns {JSX.Element} The rendered `Heading` component.
 *
 * @example
 * // Usage Example
 * <Heading color="primary">Hello, World!</Heading>
 */
export default function Heading({ children, color = "primary", ...props }) {
  return (
    <Text
      bgClip="text"
      fontWeight="extrabold"
      className={`${color}-gc text-center text-sm phone:text-lg tablet:text-2xl laptop:text-4xl tv:text-8xl`}
      {...props}
    >
      {children}
    </Text>
  );
}

// Define PropTypes for the Heading component
Heading.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "error",
    "primary",
    "secondary",
    "success",
    "warning",
    "info",
  ]),
};

/**
 * `Headings` component that extends the Chakra UI Heading component.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} [props.colorScheme] - The visual color appearance of the heading.
 * @param {string} [props.size] - The size of the heading.
 * @param {string} [props.variant] - The variant of the heading.
 * @returns {JSX.Element} The rendered `RobustHeading` component.
 * @example <Headings colorScheme="blue" size="xl" variant="italic">
          Welcome to Robust Heading Component
        </Headings>
 */

export function Headings({ colorScheme, size, variant, children, ...rest }) {
  return (
    <ChakraHeading
      colorScheme={colorScheme}
      size={size}
      variant={variant}
      {...rest}
    >
      {children}
    </ChakraHeading>
  );
}

Headings.propTypes = {
  colorScheme: PropTypes.oneOf([
    "whiteAlpha",
    "blackAlpha",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
    "linkedin",
    "facebook",
    "messenger",
    "whatsapp",
    "twitter",
    "telegram",
  ]),
  size: PropTypes.oneOf(["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"]),
  variant: PropTypes.string,
  children: PropTypes.node,
};
