import React from "react";
import { Switch as ChakraSwitch } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Switch component for creating a switch input with Chakra UI styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.aria-describedby] - The ID of an element that provides a description of the checkbox.
 * @param {boolean} [props.aria-invalid] - If true, marks the checkbox as invalid.
 * @param {string} [props.aria-label] - Defines the string that labels the checkbox element.
 * @param {string} [props.aria-labelledby] - Refers to the ID of the element that labels the checkbox element.
 * @param {boolean} [props.defaultChecked] - If true, the switch will be initially checked.
 * @param {string} [props.id] - ID assigned to the input.
 * @param {boolean} [props.isChecked] - If true, the switch will be checked (controlled).
 * @param {boolean} [props.isDisabled] - If true, the switch will be disabled.
 * @param {boolean} [props.isFocusable] - If true and isDisabled is passed, the switch will remain tabbable but not interactive.
 * @param {boolean} [props.isInvalid] - If true, the switch is marked as invalid.
 * @param {boolean} [props.isReadOnly] - If true, the switch will be read-only.
 * @param {boolean} [props.isRequired] - If true, the switch input is marked as required.
 * @param {string} [props.name] - The name of the input field (useful for form submission).
 * @param {(event: FocusEvent<HTMLInputElement, Element>) => void} [props.onBlur] - The callback invoked when the switch is blurred (loses focus).
 * @param {(event: ChangeEvent<HTMLInputElement>) => void} [props.onChange] - The callback invoked when the checked state of the switch changes.
 * @param {(event: FocusEvent<HTMLInputElement, Element>) => void} [props.onFocus] - The callback invoked when the switch is focused.
 * @param {string} [props.size] - The size of the switch.
 * @param {ResponsiveValue<string | number | (string & {})>} [props.spacing] - The spacing between the switch and its label text.
 * @param {number} [props.tabIndex] - The tab-index property of the underlying input element.
 * @param {string | number} [props.value] - The value to be used in the switch input.
 * @param {string} [props.variant] - The variant of the switch.
 */
export default function Switch({
  defaultChecked,
  id,
  isChecked,
  isDisabled,
  isFocusable,
  isInvalid,
  isReadOnly,
  isRequired,
  name,
  onBlur,
  onChange,
  onFocus,
  size,
  spacing,
  tabIndex,
  value,
  variant,
}) {
  return (
    <ChakraSwitch
      defaultChecked={defaultChecked}
      id={id}
      isChecked={isChecked}
      isDisabled={isDisabled}
      isFocusable={isFocusable}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      size={size}
      spacing={spacing}
      tabIndex={tabIndex}
      value={value}
      variant={variant}
    />
  );
}

// Define PropTypes for the Switch component
Switch.propTypes = {
  defaultChecked: PropTypes.bool,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFocusable: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tabIndex: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
};
