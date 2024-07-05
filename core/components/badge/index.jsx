import { Badge as ChakraBadge } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
import { hashStringToNumber } from "@/utils";

/**
 * `Badge` is a React component used to display notifications, messages, or statuses in different shapes and sizes.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.variant] - Pass the variant prop and set it to a different style.
 *   @supportedValues "outline" | "solid" | "subtle"
 * @param {React.ReactNode} props.children - React component that will be rendered in the UI.
 * @param {string} [props.colorScheme] - Pass the colorScheme prop to customize the color of the Badge. colorScheme can be any color key that exists in theme.colors.
 *   @supportedValues "green" | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
 * @param {string} [props.fontSize] - You can also change the size of the badge by passing the fontSize prop.
 *   @supportedValues "small" | "sm" | "md" | "lg" | "xl" | "2xl" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "large" | "medium" | "x-large" | ... 15 more ... | "9xl"
 * @param {string} [props.author] - The author of the component.
 *
 * @example
 * <Badge variant="outline" colorScheme="green" fontSize="small">
 *   My Badge
 * </Badge>
 */

export default function Badge({
  variant = "subtle",
  colorScheme = "green",
  fontSize = "small",
  randomColor = false,
  children,
}) {
  const colors = [
    "green",
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
  ];

  // Get color for text
  function getColorForText(text) {
    const hash = hashStringToNumber(text);
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }

  const color = getColorForText(children);

  return (
    <ChakraBadge
      variant={variant}
      colorScheme={randomColor ? color : colorScheme}
      fontSize={fontSize}
    >
      {children}
    </ChakraBadge>
  );
}

Badge.propTypes = {
  variant: PropTypes.oneOf(["outline", "solid", "subtle"]),
  children: PropTypes.node.isRequired,
  randomColor: PropTypes.bool,
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
  fontSize: PropTypes.oneOfType([
    PropTypes.oneOf([
      "small",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "-moz-initial",
      "inherit",
      "initial",
      "revert",
      "revert-layer",
      "unset",
      "large",
      "medium",
      "x-large",

      // ... add other supported values here
    ]),
    PropTypes.string,
  ]),
};

export function BadgeSkeleton() {
  return <Skeleton height="24px" width="80px" />;
}
