import React from "react";
import { Button, Tooltip as ChakraTooltip } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Tooltip component displays additional information or context when users interact with an element.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.hoverText] - The text or label to display within the tooltip.
 * @param {string} [props.placement] - The placement of the tooltip relative to its reference.
 * @param {boolean} [props.showArrow] - Whether to display an arrow on the tooltip.
 * @param {boolean} [props.showAsButton] - Whether to display the children as a button triggering the tooltip.
 * @param {React.ReactNode} props.children - The content that triggers the tooltip on hover.
 *
 * @example
 * <Tooltip hoverText="Hover me for more info" placement="top" showArrow={true} showAsButton={false}>
 *   Hover me
 * </Tooltip>
 */

function Tooltip({
  hoverText,
  showArrow = true,
  showAsButton = true,
  children,
  placement = "top",
}) {
  return (
    <ChakraTooltip hasArrow={showArrow} label={hoverText} placement={placement}>
      {showAsButton ? <Button>{children}</Button> : children}
    </ChakraTooltip>
  );
}

Tooltip.propTypes = {
  hoverText: PropTypes.string,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  showArrow: PropTypes.bool,
  showAsButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
