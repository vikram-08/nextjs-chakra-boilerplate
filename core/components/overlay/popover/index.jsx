"use client";
import PropTypes from "prop-types";
import {
  Popover as ChakraPopover,
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import React, { useRef } from "react";

/**
 * `Popover` is a component for displaying a popover with customizable content.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.triggerText - The text displayed on the trigger button.
 * @param {string} props.headerText - The text displayed in the popover header.
 * @param {string} props.placement - The placement of the popover.
 * @param {boolean} props.showHeader - Whether to display the popover header.
 * @param {boolean} props.closeOnBlur - Determines whether the popover closes on blur.
 * @param {React.ReactNode} props.children - The text displayed in the popover body.
 * @param {boolean} props.isOpen - If true, the popover will be opened in controlled mode.
 * @param {function} props.onClose - Callback fired when the popover closes.
 * @example
 * // Usage Example
 *  <Popover
        triggerText="Open Popover"
        headerText="Popover Header"
        onClick={noop}
        placement="right"
        closeOnBlur={true}
      >
        Content of popover
      </Popover>
 */
export default function Popover({
  triggerText,
  headerText,
  placement,
  showHeader = true,
  closeOnBlur = true,
  children,
  onClose,
}) {
  const initialFocusRef = useRef();

  return (
    <ChakraPopover
      initialFocusRef={initialFocusRef}
      placement={placement}
      closeOnBlur={closeOnBlur}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button>{triggerText}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        {showHeader && <PopoverHeader>{headerText}</PopoverHeader>}
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </ChakraPopover>
  );
}

// Define PropTypes for the Popover component
Popover.propTypes = {
  triggerText: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  placement: PropTypes.oneOf([
    "auto-start",
    "auto",
    "auto-end",
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
  ]).isRequired,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  closeOnBlur: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};
