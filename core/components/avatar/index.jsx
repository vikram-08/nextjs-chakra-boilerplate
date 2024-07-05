import React from "react";
import {
  Avatar as ChakraAvatar,
  AvatarBadge,
  SkeletonCircle,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * `Avatar` is a component that renders a user avatar with support for fallback avatars and name-only avatars.
 *
 * @param {object} props - The component's props.
 * @param {boolean} [props.showBadge] - If true, a badge icon will be shown.
 * @param {string} [props.size] - Size of the avatar.
 *   @supportedValues "md" | "sm" | "lg" | "xl" | "2xl" | "2xs" | "xs" | "full"
 * @param {string} [props.name] - If `src` has loaded, the name will be used as the `alt` attribute of the `img`.
 * @param {string} [props.src] - The image URL of the Avatar.
 * @param {string} [props.badgeColor] - Background color of the badge.
 *   @supportedValues "green.400" | "current" | "whiteAlpha.50" | "whiteAlpha.100" | "whiteAlpha.200" | "whiteAlpha.300" | "whiteAlpha.400" | "whiteAlpha.500" | "whiteAlpha.600" | ... 185 more ... | "chakra-placeholder-color._dark"
 * @param {string} [props.badgeSize] - Badge size (which can vary).
 *   @supportedValues "md" | "px" | "sm" | "lg" | "xl" | "2xl" | "2xs" | "xs" | "full" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "-moz-fit-content" | ... 55 more ... | "container.xl"
 *
 * @example
 * <Avatar
 *   name="Segun Adebayo"
 *   src="https://example.com/avatar.jpg"
 *   badgeColor="green.400"
 *   badgeSize="1.25rem"
 * />
 */

export default function Avatar({
  showBadge = false,
  size = "md",
  badgeColor = "green.400",
  badgeSize = "1.25rem",
  name = "Avatar",
  src,
}) {
  return (
    src && (
      <ChakraAvatar size={size} name={name} src={src}>
        {showBadge && <AvatarBadge boxSize={badgeSize} bg={badgeColor} />}
      </ChakraAvatar>
    )
  );
}

Avatar.propTypes = {
  showBadge: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm", "lg", "xl", "2xl", "2xs", "xs", "full"]),
  name: PropTypes.string,
  src: PropTypes.string,
  badgeColor: PropTypes.string,
  badgeSize: PropTypes.string,
};

export const AvatarSkeleton = () => {
  return <SkeletonCircle size="14" />;
};
