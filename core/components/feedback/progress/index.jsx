import React from "react";
import { Progress as ChakraProgress } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Progress component for displaying progress bars.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.colorScheme="blue"] - The visual color appearance of the progress bar.
 * @param {boolean} [props.hasStripe=false] - If true, the progress bar will show stripes.
 * @param {boolean} [props.isAnimated=false] - If true, and hasStripe is true, the stripes will be animated.
 * @param {boolean} [props.isIndeterminate=false] - If true, the progress will be indeterminate, and the value prop will be ignored.
 * @param {number} [props.max=100] - The maximum value of the progress bar.
 * @param {number} [props.min=0] - The minimum value of the progress bar.
 * @param {string} [props.size="md"] - The size of the progress bar.
 * @param {number} props.value - The current value of the progress bar.
 * @example <Progress
            value={progress} // Set the current progress value here
            colorScheme="green" // Customize the color appearance
            hasStripe // Show stripes
            isAnimated // Animate the stripes
            size="lg" // Set the size
          />
 */
export default function Progress({
  colorScheme = "green",
  hasStripe = false,
  isAnimated = false,
  isIndeterminate = false,
  max = 100,
  min = 0,
  size = "md",
  value,
}) {
  return (
    <ChakraProgress
      colorScheme={colorScheme}
      hasStripe={hasStripe}
      isAnimated={isAnimated}
      isIndeterminate={isIndeterminate}
      max={max}
      min={min}
      size={size}
      value={value}
    />
  );
}

// Define PropTypes for the Progress component
Progress.propTypes = {
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
  hasStripe: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  value: PropTypes.number.isRequired,
};
