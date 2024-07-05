import React from "react";
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Alert component for displaying alerts.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.addRole - Adds a role attribute to the Alert component.
 * @param {string} props.title - Alert title text
 * @param {string} props.size - The size of the Alert. (e.g., "full", "sm", "md", "lg", "xl", "2xl", "2xs", "xs", "3xl", "4xl", "5xl", "6xl")
 * @param {string} props.status - The status of the Alert (e.g., "info", "warning", "success", "error", "loading").
 * @param {string} props.variant - The variant of the Alert (e.g., "subtle", "left-accent", "top-accent", "solid").
 * @param {React.ReactNode} props.children - The content to display within the Alert.
 */
export default function Alert({
  addRole = true,
  size,
  title,
  status = "info",
  variant = "subtle",
  children,
}) {
  return (
    <ChakraAlert
      addRole={addRole}
      status={status}
      size={size}
      variant={variant}
    >
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </ChakraAlert>
  );
}

// Define PropTypes for the Alert component
Alert.propTypes = {
  addRole: PropTypes.oneOf([
    "full",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "2xs",
    "xs",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
  ]),
  title: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.oneOf(["info", "warning", "success", "error", "loading"]),
  variant: PropTypes.oneOf(["subtle", "left-accent", "top-accent", "solid"]),
  children: PropTypes.node.isRequired,
};
