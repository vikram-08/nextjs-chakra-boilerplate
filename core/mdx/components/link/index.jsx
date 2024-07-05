"use client";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "@/components/navigation";

/**
 * `MDXLink` is a React component for rendering links.
 *
 * @param {string} href - The URL to navigate to when the link is clicked.
 * @param {string} children - The content to be displayed inside the link.
 */
export const MDXLink = ({ children, href }) => {
  return (
    <Link href={href} showUnderline={false}>
      {children}
    </Link>
  );
};

// PropTypes for MDXLink
MDXLink.propTypes = {
  /**
   * The URL to navigate to when the link is clicked.
   */
  href: PropTypes.string.isRequired,
  /**
   * The content to be displayed inside the link.
   */
  children: PropTypes.node.isRequired,
};
