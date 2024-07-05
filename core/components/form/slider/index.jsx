"use client";
import React, { useState } from "react";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Slider component for selecting a value within a range.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.aria-label] - Aria label for the slider.
 * @param {string} [props.aria-labelledby] - Aria-labelledby attribute to reference a label element.
 * @param {string} [props.aria-valuetext] - Aria-valuetext attribute for screen readers.
 * @param {string} [props.colorScheme="blue"] - The visual color appearance of the slider.
 * @param {number} [props.defaultValue=0] - The initial value of the slider in uncontrolled mode.
 * @param {string} [props.direction="ltr"] - The writing mode, "ltr" (left-to-right) or "rtl" (right-to-left).
 * @param {boolean} [props.focusThumbOnChange=true] - If false, the slider handle won't capture focus when value changes.
 * @param {(value: number) => string} [props.getAriaValueText] - Function to generate aria-valuetext for screen readers.
 * @param {string} [props.id] - The base ID for the slider and its components.
 * @param {boolean} [props.isDisabled=false] - If true, the slider will be disabled.
 * @param {boolean} [props.isReadOnly=false] - If true, the slider will be in read-only state.
 * @param {boolean} [props.isReversed=false] - If true, the value will be incremented or decremented in reverse.
 * @param {number} [props.max=100] - The maximum allowed value of the slider.
 * @param {number} [props.min=0] - The minimum allowed value of the slider.
 * @param {string} [props.name] - The name attribute of the hidden input field (useful in forms).
 * @param {(value: number) => void} [props.onChange] - Function called whenever the slider value changes.
 * @example
 * // Example usage of Slider:
 * <Slider
 *   aria-label="Volume"
 *   defaultValue={50}
 *   min={0}
 *   max={100}
 *   step={1}
 *   onChange={(value) => logger.log(`Slider value: ${value}`)}
 * />
 */
export default function Slider(props) {
  const {
    defaultValue = 0,
    direction = "ltr",
    focusThumbOnChange = true,
    isDisabled = false,
    isReadOnly = false,
    isReversed = false,
    max = 100,
    min = 0,
    step,
    onChange,
    ...restProps
  } = props;

  const [sliderValue, setSliderValue] = useState(defaultValue);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
    onChange && onChange(sliderValue);
  };

  return (
    <ChakraSlider
      defaultValue={defaultValue}
      min={min}
      max={max}
      direction={direction}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      focusThumbOnChange={focusThumbOnChange}
      isReversed={isReversed}
      step={step}
      onChange={handleSliderChange}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      {...restProps}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        value={sliderValue}
        isOpen={showTooltip}
        label={`${sliderValue}%`}
        placement="top"
      >
        <SliderThumb boxSize={6} />
      </Tooltip>
    </ChakraSlider>
  );
}

// Define PropTypes for the Slider component
Slider.propTypes = {
  "aria-label": PropTypes.string,
  "aria-labelledby": PropTypes.string,
  "aria-valuetext": PropTypes.string,
  defaultValue: PropTypes.number,
  direction: PropTypes.oneOf(["ltr", "rtl"]),
  focusThumbOnChange: PropTypes.bool,
  getAriaValueText: PropTypes.func,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isReversed: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
