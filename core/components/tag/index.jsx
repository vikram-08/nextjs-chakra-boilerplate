import React from "react";
import PropTypes from "prop-types";
import {
  Tag as ChakraTag,
  Avatar,
  TagCloseButton,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
} from "@chakra-ui/react";
import { noop } from "@/utils";

const icons = {
  left: TagLeftIcon,
  right: TagRightIcon,
  close: TagCloseButton,
};

/**
 * `Tag` is a component used for labeling, categorizing, or organizing items using keywords.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.size] - The size of the Tag.
 *   @supportedValues "xs" | "sm" | "md" | "lg" | "xl"
 * @param {string} [props.variant="subtle"] - The visual variant of the Tag.
 *   @supportedValues "subtle" | "outline" | "solid"
 * @param {string} [props.iconName="close"] - The name of the icon to display.
 *   @supportedValues "right" | "left" | "close"
 * @param {string} [props.colorScheme="green"] - The visual color appearance of the component.
 *   @supportedValues "green" | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
 * @param {React.ReactNode} props.children - A React component to render in the UI.
 * @param {Function} [props.onClick] - A function to call when the tag is clicked.
 * @param {Function} [props.onRemove] - A function to call when the icon is clicked.
 * @param {boolean} [props.showCloseIcon=false] - If true, a close icon will be shown.
 * @returns {React.ReactNode} - The rendered component.
 * @example
 * <Tag
 *   size="lg"
 *   variant="solid"
 *   showCloseIcon={true}
 *   iconName="close"
 *   colorScheme="green"
 *   onClick={noop}
 *   onRemove={noop}
 * >
 *   My Tag
 * </Tag>
 */

export default function Tag({
  size = "md",
  variant = "subtle",
  colorScheme = "green",
  showCloseIcon = false,
  children,
  iconName = "close",
  onRemove = noop,
  onClick = noop,
}) {
  const CurrentIcon = icons[iconName];

  return (
    <ChakraTag
      size={size}
      key={size}
      borderRadius="full"
      variant={variant}
      colorScheme={colorScheme}
      onClick={onClick}
    >
      <TagLabel>{children}</TagLabel>
      {showCloseIcon && <CurrentIcon onClick={onRemove} />}
    </ChakraTag>
  );
}

Tag.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["subtle", "outline", "solid"]),
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
  ]),
  showCloseIcon: PropTypes.bool,
  children: PropTypes.node.isRequired,
  iconName: PropTypes.oneOf(["right", "left", "close"]),
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
};

/**
 * `ProfileTag` is a component for labeling, categorizing, or organizing items using keywords.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.size="lg"] - The size of the Tag.
 *   @supportedValues "xs" | "sm" | "md" | "lg" | "xl"
 * @param {string} [props.imageLink] - The image URL of the Avatar.
 * @param {string} props.name - The name of the person in the avatar.
 *   - If the src has loaded, the name will be used as the alt attribute of the img.
 *   - If src is not loaded, the name will be used to create the initials.
 * @param {string} [props.variant="subtle"] - The visual variant of the Tag.
 *   @supportedValues "subtle" | "outline" | "solid"
 * @param {string} [props.iconName="close"] - The name of the icon to display.
 *   @supportedValues "right" | "left" | "close"
 * @param {string} [props.colorScheme="green"] - The visual color appearance of the component.
 *   @supportedValues "green" | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
 * @param {React.ReactNode} props.children - A React component to render in the UI.
 * @param {Function} [props.onClick] - A function to call when the tag is clicked.
 * @param {Function} [props.onRemove] - A function to call when the icon is clicked.
 * @param {boolean} [props.showCloseIcon=false] - If true, a close icon will be shown.
 * @returns {React.ReactNode} - The rendered component.
 * @example
 * <ProfileTag
 *   imageLink="https://example.com/author-profile.jpg"
 *   size="lg"
 *   variant="solid"
 *   iconName="close"
 *   colorScheme="green"
 *   onClick={noop}
 *   showCloseIcon={true}
 *   onRemove={noop}
 *   name="Segun"
 * >
 *   Profile
 * </ProfileTag>
 */

export function ProfileTag({
  size = "lg",
  imageLink,
  name,
  variant = "subtle",
  iconName = "close",
  showCloseIcon = false,
  colorScheme = "green",
  children,
  onRemove = noop,
  onClick = noop,
}) {
  const CurrentIcon = icons[iconName];

  return (
    <ChakraTag
      size={size}
      colorScheme={colorScheme}
      borderRadius="full"
      variant={variant}
      onClick={onClick}
      ml={-1}
      mr={2}
    >
      <Avatar src={imageLink} size={"xs"} name={name} mr={2} />
      <TagLabel>{children}</TagLabel>
      {showCloseIcon && <CurrentIcon onClick={onRemove} />}
    </ChakraTag>
  );
}

// Define the PropTypes for the ProfileTag component

ProfileTag.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  imageLink: PropTypes.string,
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["subtle", "outline", "solid"]),
  iconName: PropTypes.oneOf(["right", "left", "close"]),
  showCloseIcon: PropTypes.bool,
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
  ]),
  children: PropTypes.node.isRequired,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
};
