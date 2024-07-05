"use client";
import { noop } from "@/utils";
import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import PropTypes from "prop-types";

/**
 * `AlertDialogModal` is a component used to interrupt the user with a mandatory confirmation or action.
 *
 * @param {object} props - The component's props.
 * @param {Function} props.onClose - Callback invoked to close the modal.
 * @param {string} props.title - The title of the alert.
 * @param {React.ReactNode} props.children - The content of the alert.
 * @param {boolean} [props.isOpen] - If true, the modal will be open.
 * @param {string} [props.motionPreset="scale"] - The transition that should be used for the modal.
 *   @supportedValues "scale" | "slideInBottom" | "slideInRight" | "slideInTop" | "slideInLeft" | "none"
 * @param {string} [props.colorScheme] - Color of the button `submitButtonText`.
 *   @supportedValues "green" | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
 * @param {boolean} [props.isCentered] - If true, the modal will be centered on the screen.
 * @param {boolean} [props.showCloseIcon] - If true, then a close icon will be shown in the top right corner.
 * @param {boolean} [props.showButtons] - If true, then buttons will be shown below.
 * @param {string} [props.submitButtonText] - The label for the action-proceeding button.
 * @param {string} [props.cancelButtonText] - The label for the action-cancel button.
 * @example
 * // Usage example:
 * // First, set up state to control the dialog's open/close state:
 * const [dialogAlert, setDialogAlert] = useState(false);
 *
 * // Then, use the `AlertDialogModal` component within your JSX:
 * <Button onClick={() => setDialogAlert(!dialogAlert)}>Discard</Button>
 * <AlertDialogModal
 *   title="Alert Test"
 *   isOpen={dialogAlert}
 *   motionPreset="scale"
 *   onClose={setDialogAlert}
 *   submitButtonText="yes"
 *   cancelButtonText="no"
 * >
 *   Alert content
 * </AlertDialogModal>
 */

export default function AlertDialogModal({
  onClose = noop,
  title,
  children,
  isOpen,
  showCloseIcon = false,
  motionPreset = "scale",
  colorScheme = "green",
  isCentered = true,
  showButtons = false,
  submitButtonText,
  cancelButtonText,
}) {
  const { onClose: alertClose } = useDisclosure();
  const cancelRef = useRef();

  const handleClose = () => {
    alertClose();
    onClose(!isOpen);
  };

  return (
    <ChakraAlertDialog
      motionPreset={motionPreset}
      leastDestructiveRef={cancelRef}
      onClose={handleClose}
      isOpen={isOpen}
      isCentered={isCentered}
      size={"2xl"}
    >
      <AlertDialogOverlay backdropFilter="auto" backdropBlur={"2px"} />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        {showCloseIcon && <AlertDialogCloseButton />}
        <AlertDialogBody>{children}</AlertDialogBody>
        {showButtons && (
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleClose}>
              {cancelButtonText}
            </Button>
            <Button colorScheme={colorScheme} ml={3}>
              {submitButtonText}
            </Button>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </ChakraAlertDialog>
  );
}

AlertDialogModal.propTypes = {
  onClose: PropTypes.func, // Callback invoked to close the modal.
  title: PropTypes.string.isRequired, // The title of the alert.
  children: PropTypes.node.isRequired, // The content of the alert.
  isOpen: PropTypes.bool, // If true, the modal will be open.
  motionPreset: PropTypes.oneOf([
    "scale",
    "slideInBottom",
    "slideInRight",
    "slideInTop",
    "slideInLeft",
    "none",
  ]), // The transition that should be used for the modal.
  colorScheme: PropTypes.oneOf([
    "green",
    "whiteAlpha",
    "blackAlpha",
    "gray",
    "red",
    "orange",
    "yellow",
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
  ]), // Color of the button `submitButtonText`.
  isCentered: PropTypes.bool, // If true, the modal will be centered on the screen.
  showCloseIcon: PropTypes.bool, // If true, then a close icon will be shown in the top right corner.
  showButtons: PropTypes.bool, // If true, then buttons will be shown below.
  submitButtonText: PropTypes.string, // The label for the action-proceeding button.
  cancelButtonText: PropTypes.string, // The label for the action-cancel button.
};
