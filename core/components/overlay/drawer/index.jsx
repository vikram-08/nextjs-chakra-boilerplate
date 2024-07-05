import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { noop } from "@/utils";

/**
 * `DrawerMenu` is a component for creating a drawer menu that can slide in from various placements.
 *
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The content to be displayed within the drawer.
 * @param {string} [props.size="full"] - The size of the drawer. Supported values: "full", "xs", "sm", "md", "lg", "xl".
 * @param {string} props.title - The title to be displayed at the top of the drawer.
 * @param {boolean} props.isOpen - Determines whether the drawer is open or closed.
 * @param {string} [props.placement="top"] - The placement of the drawer. Supported values: "top", "right", "bottom", "left".
 * @param {function} [props.onClose] - A callback function to handle the closing of the drawer.
 *
 * @example
 * <DrawerMenu
 *   title="Menu"
 *   isOpen={isDrawerOpen}
 *   onClose={(isOpen) => setIsDrawerOpen(isOpen)}
 * >
 *   { Content for the drawer}
 * </DrawerMenu>
 */

export default function DrawerMenu({
  children,
  size = "full",
  title,
  isOpen,
  placement = "top",
  onClose = noop,
}) {
  const { onClose: drawerClose } = useDisclosure();

  /**
   * Handles the close event of the drawer.
   */

  const handleClose = () => {
    drawerClose();
    onClose(!isOpen);
  };

  return (
    <Drawer
      placement={placement}
      onClose={handleClose}
      isOpen={isOpen}
      size={size}
    >
      <DrawerOverlay backdropFilter="auto" backdropBlur={"2px"} />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

DrawerMenu.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["full", "xs", "sm", "md", "lg", "xl"]),
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  onClose: PropTypes.func,
};
