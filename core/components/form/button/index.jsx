import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { noop } from "@/utils";

/**
 * `Button` component for creating buttons with Chakra UI styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string | number | (string & {})} props.iconSpacing - The space between the button icon and label.
 * @param {boolean} props.isActive - If true, the button will be styled in its active state.
 * @param {boolean} props.isDisabled - If true, the button will be disabled.
 * @param {boolean} props.isLoading - If true, the button will show a spinner.
 * @param {React.ReactNode} props.leftIcon - An icon to show before the button's label.
 * @param {string} props.loadingText - The label to show in the button when isLoading is true.
 * @param {React.ReactNode} props.rightIcon - An icon to show after the button's label.
 * @param {string} props.size - The size of the button.
 * @param {React.ReactNode} props.spinner - Replace the spinner component when isLoading is set to true.
 * @param {string} props.spinnerPlacement - Determines the placement of the spinner when isLoading is true.
 * @param {string} props.variant - The variant of the button.
 * @param {React.ReactNode} props.children - The content to display within the button.
 */
export default function Button({
  iconSpacing,
  isActive,
  isDisabled,
  isLoading,
  leftIcon,
  loadingText,
  rightIcon,
  size = "md",
  onClick = noop,
  spinner,
  spinnerPlacement = "start",
  variant = "solid",
  children,
  ...rest
}) {
  return (
    <ChakraButton
      iconSpacing={iconSpacing}
      isActive={isActive}
      isDisabled={isDisabled}
      isLoading={isLoading}
      leftIcon={leftIcon}
      loadingText={loadingText}
      rightIcon={rightIcon}
      onClick={onClick}
      size={size}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      variant={variant}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}

// Define PropTypes for the Button component
Button.propTypes = {
  iconSpacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  leftIcon: PropTypes.node,
  loadingText: PropTypes.string,
  rightIcon: PropTypes.node,
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  spinner: PropTypes.node,
  spinnerPlacement: PropTypes.oneOf(["start", "end"]),
  variant: PropTypes.oneOf(["ghost", "outline", "solid", "link", "unstyled"]),
  children: PropTypes.node.isRequired,
};
