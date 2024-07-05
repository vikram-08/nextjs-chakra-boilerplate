import React from "react";
import { Select as ChakraSelect } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * A styled select input component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.colorScheme] - Visual color appearance.
 * @param {string} [props.errorBorderColor] - Border color when invalid.
 * @param {string} [props.focusBorderColor] - Border color when focused.
 * @param {boolean} [props.isDisabled] - If true, the select is disabled.
 * @param {boolean} [props.isInvalid] - If true, the select is marked as invalid.
 * @param {boolean} [props.isReadOnly] - If true, the select is read-only.
 * @param {boolean} [props.isRequired] - If true, the select is required.
 * @param {string} [props.size] - The size of the select.
 * @param {string} [props.variant] - The variant of the select.
 * @param {Object} [props.rootProps] - Additional props for the root element.
 * @param {...any} [props...restProps] - Additional select props.
 * @example
 * // Example usage:
 * <Select colorScheme="blue" size="md">
 *   <option value="option1">Option 1</option>
 *   <option value="option2">Option 2</option>
 * </Select>
 */
function Select(props) {
  return <ChakraSelect {...props} />;
}

Select.propTypes = {
  colorScheme: PropTypes.string,
  errorBorderColor: PropTypes.string,
  focusBorderColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "filled", "flushed", "unstyled"]),
  rootProps: PropTypes.object,
};

export default Select;
