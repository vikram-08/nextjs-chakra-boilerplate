import React from "react";
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ChakraIcon } from "@/components";

/**
 * Input component for creating input fields with Chakra UI styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.colorScheme="blue"] - The visual color appearance of the input.
 * @param {string} [props.errorBorderColor] - The border color when the input is invalid.
 * @param {string} [props.focusBorderColor] - The border color when the input is focused.
 * @param {number} [props.htmlSize] - The native HTML size attribute to be passed to the input.
 * @param {boolean} [props.isDisabled] - If true, the input will be disabled.
 * @param {string} [props.leftIconName] - The name of the left icon to display.
 * @param {string} [props.rightIconName] - The name of the right icon to display.
 * @param {boolean} [props.isInvalid] - If true, the input will be invalid.
 * @param {boolean} [props.isReadOnly] - If true, the input will be readonly.
 * @param {boolean} [props.isRequired] - If true, the input will be required.
 * @param {string} [props.size="md"] - The size of the input.
 * @param {string} [props.variant="outline"] - The variant of the input.
 * @param {React.InputHTMLAttributes} [props.inputProps] - Additional input props.
 * @example
 * // Example usage of Input with icons:
 * <Input
 *   leftIconName="email"
 *   rightIconName="lock"
 *   colorScheme="green"
 *   focusBorderColor="green.400"
 *   isRequired
 *   placeholder="Enter your email"
 *   onChange={(e) => logger.log(e.target.value)}
 * />
 */
export default function Input({
  colorScheme = "blue",
  errorBorderColor,
  focusBorderColor,
  htmlSize,
  isDisabled,
  leftIconName,
  rightIconName,
  isInvalid,
  isReadOnly,
  isRequired,
  size = "md",
  variant = "outline",
  inputProps,
  ...restProps
}) {
  return (
    <InputGroup>
      {leftIconName && (
        <InputLeftElement pointerEvents="none">
          <ChakraIcon iconName={leftIconName} />
        </InputLeftElement>
      )}
      <ChakraInput
        colorScheme={colorScheme}
        errorBorderColor={errorBorderColor}
        focusBorderColor={focusBorderColor}
        size={size}
        variant={variant}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        htmlSize={htmlSize}
        {...restProps}
        {...inputProps}
      />
      {rightIconName && (
        <InputRightElement pointerEvents="none">
          <ChakraIcon iconName={rightIconName} />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

// Define PropTypes for the Input component
Input.propTypes = {
  colorScheme: PropTypes.string,
  errorBorderColor: PropTypes.string,
  focusBorderColor: PropTypes.string,
  htmlSize: PropTypes.number,
  isDisabled: PropTypes.bool,
  leftIconName: PropTypes.string,
  rightIconName: PropTypes.string,
  isInvalid: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  variant: PropTypes.oneOf(["outline", "filled", "flushed", "unstyled"]),
  inputProps: PropTypes.object,
};
