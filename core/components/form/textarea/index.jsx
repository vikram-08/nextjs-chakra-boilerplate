import React from "react";
import { Textarea as ChakraTextarea } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * `Textarea` component for creating input fields with Chakra UI styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.placeholder] - The placeholder text for the textarea.
 * @param {string} [props.size="md"] - The size of the textarea.
 * @param {string} [props.variant="outline"] - The variant of the textarea.
 * @param {string} [props.colorScheme] - The visual color appearance of the textarea.
 * @param {boolean} [props.isDisabled] - If true, the textarea will be disabled.
 * @param {boolean} [props.isInvalid] - If true, the textarea will be marked as invalid.
 * @param {boolean} [props.isReadOnly] - If true, the textarea will be in read-only state.
 * @param {boolean} [props.isRequired] - If true, the textarea is marked as required.
 * @param {string} [props.focusBorderColor] - The border color when the textarea is focused.
 * @param {string} [props.errorBorderColor] - The border color when the textarea is invalid.
 * @param {any} [props.restProps] - Additional textarea props.
 * @example
 * // Example usage of Textarea:
 * <Textarea
 *   placeholder="Enter your text here"
 *   size="md"
 *   variant="outline"
 *   colorScheme="blue"
 *   isRequired
 *   focusBorderColor="blue.500"
 *   errorBorderColor="red.500"
 * />
 */
function Textarea({
  placeholder,
  size,
  variant,
  colorScheme,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  focusBorderColor,
  errorBorderColor,
  ...restProps
}) {
  return (
    <ChakraTextarea
      placeholder={placeholder}
      size={size}
      variant={variant}
      colorScheme={colorScheme}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      focusBorderColor={focusBorderColor}
      errorBorderColor={errorBorderColor}
      {...restProps}
    />
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "flushed", "filled", "unstyled"]),
  colorScheme: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  focusBorderColor: PropTypes.string,
  errorBorderColor: PropTypes.string,
};

export default Textarea;
