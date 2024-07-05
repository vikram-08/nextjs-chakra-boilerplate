import React from "react";
import {
  FormControl as ChakraFormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * FormControl component for creating form controls with Chakra UI styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isDisabled - If true, the form control will be disabled.
 * @param {boolean} props.isInvalid - If true, the form control will be invalid.
 * @param {boolean} props.isReadOnly - If true, the form control will be readonly.
 * @param {boolean} props.isRequired - If true, the form control will be required.
 * @param {string} props.label - The label text used to inform users about the form control.
 * @param {React.ReactNode} props.children - The content of the form control.
 * @param {string} props.errorMessage - Error message to display when the form control is invalid.
 * @param {string} props.helperText - Helper text to provide additional information about the form control.
 * @example
 * // Example usage of FormControl:
 * <FormControl label="Username" isRequired errorMessage="Username is required">
 *   <Input placeholder="Enter your username" />
 * </FormControl>
 */
export default function FormControl({
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
  label,
  children,
  errorMessage,
  helperText,
}) {
  return (
    <ChakraFormControl
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
    >
      <FormLabel>{label}</FormLabel>
      {children}
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </ChakraFormControl>
  );
}

// Define PropTypes for the FormControl component
FormControl.propTypes = {
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
};
