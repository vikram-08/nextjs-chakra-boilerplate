"use client";
import {
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { noop } from "@/utils";

/**
 * `Modal` is a component for rendering a modal dialog with a specified size.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Modal header title
 * @param {React.ReactNode} props.children - Text content to display in the modal body
 * @param {function} props.onClose - Function to handle modal close
 * @param {function} props.onSubmit - Function to handle modal submit
 * @param {string} [props.colorScheme] - Color of the button `submitButtonText`.
 * @param {string} props.submitButtonText - Text for the submit button
 * @param {string} props.closeButtonText - Text for the close button
 * @param {string} props.initialSize - Initial size of the modal ("xs", "sm", "md", "lg", "xl", "full")
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed
 * @example
 * // Usage Example
 * <Modal
 *   title="Sample Modal"
 *   content="This is some sample content for the modal body."
 *   onClose={() => logger.log("Modal closed")}
 *   onSubmit={() => logger.log("Modal submitted")}
 *   submitButtonText="Submit"
 *   colorScheme="green"
 *   closeButtonText="Close"
 *   initialSize="md"
 *   isOpen={false}
 * />
 */
export default function Modal({
  title,
  children,
  onClose = noop,
  onSubmit = noop,
  isOpen,
  colorScheme = "green",
  submitButtonText,
  closeButtonText,
  initialSize = "md",
}) {
  const { onClose: modalOnClose } = useDisclosure();
  const [size, setSize] = useState(initialSize);

  useEffect(() => {
    setSize(initialSize);
  }, [initialSize]);

  const handleClose = () => {
    modalOnClose();
    onClose(!isOpen);
  };

  const handleSubmit = () => {
    modalOnClose();
    onSubmit(!isOpen);
  };

  return (
    <React.Fragment>
      <ChakraModal onClose={handleClose} size={size} isOpen={isOpen}>
        <ModalOverlay backdropFilter="auto" backdropBlur={"2px"} />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter className="flex gap-2 justify-end">
            <Button onClick={handleClose}>{closeButtonText}</Button>
            <Button onClick={handleSubmit} colorScheme={colorScheme}>
              {submitButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </React.Fragment>
  );
}

// Define PropTypes for the Modal component
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  colorScheme: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  closeButtonText: PropTypes.string.isRequired,
  initialSize: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
};
