"use client";
import React from "react";
import PropTypes from "prop-types";
import {
  IconSearch,
  IconMenu2,
  IconSun,
  IconMoon,
  IconBrandInstagram,
  IconBrandTelegram,
  IconShare,
  IconDotsVertical,
  IconBrandYoutube,
  IconBrandGithub,
  IconCopy,
  IconLock,
  IconMail,
  IconCloudUpload,
  IconCloudDownload,
  IconCheck,
  IconLanguage,
  IconMessageCircle,
  IconThumbUp,
  IconHome,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandNodejs,
  IconBrandReact,
  IconDots,
  IconMessages,
  IconCoffee,
  IconBrandX,
} from "@tabler/icons-react";

export const iconsList = {
  search: IconSearch,
  menu: IconMenu2,
  sun: IconSun,
  moon: IconMoon,
  instagram: IconBrandInstagram,
  telegram: IconBrandTelegram,
  share: IconShare,
  dotsHorizontal: IconDots,
  dotsVertical: IconDotsVertical,
  youtube: IconBrandYoutube,
  github: IconBrandGithub,
  copy: IconCopy,
  lock: IconLock,
  email: IconMail,
  upload: IconCloudUpload,
  download: IconCloudDownload,
  copied: IconCheck,
  language: IconLanguage,
  comment: IconMessageCircle,
  chat: IconMessages,
  xTwitter: IconBrandX,
  like: IconThumbUp,
  home: IconHome,
  facebook: IconBrandFacebook,
  whatsApp: IconBrandWhatsapp,
  java: IconCoffee,
  js: IconBrandJavascript,
  python: IconBrandPython,
  node: IconBrandNodejs,
  react: IconBrandReact,
};

// Import the icons you use here

/**
 * `ChakraIcon` is a custom icon component that renders various icons based on the provided `iconName`.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} [props.iconName="like"] - The name of the icon to render.
 * @param {object} restProps - Additional props to pass to the underlying icon component.
 * @returns {JSX.Element} The rendered icon component.
 * @example
 * // Usage example:
 * // Render a heart icon
 * <ChakraIcon iconName="like" />
 *
 * // Render a search icon
 * <ChakraIcon iconName="search" />
 */

export default function ChakraIcon({ iconName = "like", ...restProps }) {
  // Map the provided iconName to the corresponding icon component

  const Icon = iconsList[iconName] ? iconsList[iconName] : iconsList["like"];

  return <Icon {...restProps} />;
}

ChakraIcon.propTypes = {
  iconName: PropTypes.string,
  restProps: PropTypes.object,
};
