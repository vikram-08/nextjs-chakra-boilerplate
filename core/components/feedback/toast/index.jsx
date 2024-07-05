"use client";
import React, { useRef } from "react";
import { Button, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types"; // Import PropTypes

/**
 * Toast component for displaying notifications.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the toast.
 * @param {React.ReactNode} props.children - The content to display in the toast.
 * @param {string} [props.status="success"] - The status color of the toast (e.g., "info", "warning", "success", "error", "loading").
 * @param {string} [props.description] - The description text for the toast.
 * @param {number} [props.showTime=3] - The duration in seconds for which the toast will be displayed.
 * @param {boolean} [props.onlyOneToast=false] - Determines whether only one toast can be displayed at a time.
 * @param {string} [props.position="top"] - The position of the toast (e.g., "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right").
 * @param {boolean} [props.isClosable=true] - Determines whether the toast is closable.
 * @example <Toast
        title="Success"
        status="success"
        description="This is a success toast."
        showTime={5}
        onlyOneToast={true}
        position="top"
        isClosable={false}
      >
        Show Toast
      </Toast>
 */
export default function Toast({
  title,
  children,
  status = "success",
  description,
  showTime = 3,
  onlyOneToast = false,
  position = "top",
  isClosable = true,
}) {
  const toast = useToast();
  const toastIdRef = useRef();

  const duration = Math.round(showTime * 1000);

  const closeAll = () => toast.closeAll();

  const showToast = () => {
    onlyOneToast && closeAll();
    toastIdRef.current = toast({
      title,
      position,
      description,
      status,
      duration,
      isClosable,
    });
  };

  return <Button onClick={showToast}>{children}</Button>;
}

// Define PropTypes for the Toast component z
Toast.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf(["info", "warning", "success", "error", "loading"]),
  description: PropTypes.string,
  showTime: PropTypes.number,
  onlyOneToast: PropTypes.bool,
  position: PropTypes.oneOf([
    "top",
    "top-left",
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right",
  ]),
  isClosable: PropTypes.bool,
};
