"use client";
import React from "react";
import {
  Box,
  Heading,
  LinkBox as ChakraLinkBox,
  Text,
  LinkOverlay,
} from "@chakra-ui/react";
import { ChakraIcon } from "@/components";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { languageCodes } from "@/constants";
import { IconExternalLink } from "@tabler/icons-react";

// Destructure the result of createSharedPathnamesNavigation
export const {
  // NextIntlLink: Customized Link component for internationalized navigation
  Link: NextIntlLink,

  // Function for performing redirects considering language context
  redirect,

  // Hook to get the current pathname adjusted for language
  usePathname,

  // Hook providing access to the Next.js router with multi-language support
  useRouter,
} = createSharedPathnamesNavigation({ languageCodes });

/**
 * `Link` is a customizable link component that can be used with Next.js and Chakra UI.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} [props.href="#"] - The URL to link to.
 * @param {string} [props.className] - CSS style names
 * @param {boolean} [props.showUnderline] - Link style will be changed.
 * @param {string} props.children - The text or content to display for the link.
 * @returns {JSX.Element} The rendered `Link` component.
 * @example
 * // Usage example:
 * <Link
 *   href="/blog/post-1"
 *   color="blue.500"
 *   showUnderLine={false}
 * >
 *   Read More
 * </Link>
 */

export default function Link({
  href = "#",
  children,
  className,
  showUnderline = true,
  ...rest
}) {
  return href?.startsWith("http") ? (
    <NextIntlLink
      href={href}
      target="_blank"
      as={NextLink}
      className={`${!showUnderline ? "no-underline" : "underline"} ${className}`}
      {...rest}
    >
      {children} {<IconExternalLink mx="2px" />}
    </NextIntlLink>
  ) : (
    <NextIntlLink
      href={href}
      as={NextLink}
      className={`${!showUnderline ? "no-underline" : "underline"} ${className}`}
      {...rest}
    >
      {children}
    </NextIntlLink>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  showUnderline: PropTypes.bool,
};

/**
 * `LinkBox` is a box component for displaying additional content within a link.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} [props.href="#"] - The URL to link to.
 * @param {string} [props.date] - The date to display below the link.
 * @param {string} [props.title] - The title of the link.
 * @param {ReactNode} props.children - Additional content to display within the link box.
 * @returns {JSX.Element} The rendered `LinkBox` component.
 * @example
 * // Usage example:
 * <LinkBox
 *   href="/blog/post-1"
 *   date="January 15, 2021"
 *   title="Sample Blog Post"
 * >
 *   <Box>
 *     Additional content goes here...
 *   </Box>
 * </LinkBox>
 */

export function LinkBox({ href = "#", date, title, children }) {
  return (
    <ChakraLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      {date && (
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          {date}
        </Box>
      )}
      {title && (
        <Heading size="md" my="2">
          <LinkOverlay as={NextLink} href={href}>
            {title}
          </LinkOverlay>
        </Heading>
      )}
      {children}
    </ChakraLinkBox>
  );
}

LinkBox.propTypes = {
  href: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * A reusable link component for items with optional badges and icons.
 *
 * @component
 * @param {string} href - The URL to navigate to when the link is clicked.
 * @param {string} text - The text to display for the link.
 * @param {string} iconName - The name of the icon to display (optional).
 * @param {string} color - The color of the badge (default: "green").
 * @param {boolean} showBadge - Whether to show the badge (default: false).
 * @example
 * // Usage example:
 * <ItemLink
 *   link="https://example.com"
 *   text="Example Link"
 *   iconName="star"
 *   color="blue"
 *   showBadge={true}
 * />
 */
export function ItemLink({
  href,
  text,
  iconName,
  color = "green",
  showBadge = false,
}) {
  const badgeColor = `bg-${color}-600`;

  return (
    <NextIntlLink
      href={href}
      as={NextLink}
      className="flex w-full items-center gap-2 pb-4 text-left"
    >
      <Text className="font-mono text-sm leading-[16px] text-gray-400 hover:text-sky-500">
        {text}
      </Text>
      {showBadge && (
        <Box
          className={`h-2 w-2 rounded-full ${badgeColor}`}
          id="myApp-status"
        />
      )}
      {iconName && <ChakraIcon iconName={iconName} className="align-bottom" />}
    </NextIntlLink>
  );
}

// PropTypes for ItemLink component
ItemLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  color: PropTypes.string,
  showBadge: PropTypes.bool,
};
