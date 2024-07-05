import React from "react";
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Number component for creating number inputs with Chakra UI styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} [props.min] - The minimum allowed value for the number input.
 * @param {number} [props.max] - The maximum allowed value for the number input.
 * @param {number} [props.step] - The step used to increment or decrement the value.
 * @param {function} props.onChange - Callback function called when the value changes.
 * @param {string|number} [props.value] - The value of the number input.
 * @param {...any} [props...restProps] - Additional number input props.
 * @example
 * // Example usage of Number:
 * <NumberInput
 *   min={0}
 *   max={100}
 *   step={1}
 *   onChange={(value) => logger.log("Value changed:", value)}
 *   value={50}
 * />
 */
function NumberInput({ min, max, step, onChange, value, ...restProps }) {
  return (
    <ChakraNumberInput
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      value={value}
      {...restProps}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
}

NumberInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default NumberInput;
