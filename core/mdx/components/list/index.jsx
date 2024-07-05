import React from "react";
import PropTypes from "prop-types";
import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";

/**
 * `MDXUl` is a React component for rendering an unordered list.
 *
 * @param {string} children - The content to be displayed inside the unordered list.
 */
export const MDXUl = ({ children }) => {
  return <UnorderedList>{children}</UnorderedList>;
};

// PropTypes for MDXUl
MDXUl.propTypes = {
  /**
   * The content to be displayed inside the unordered list.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXOl` is a React component for rendering an ordered list.
 *
 * @param {string} children - The content to be displayed inside the ordered list.
 */
export const MDXOl = ({ children }) => {
  return <OrderedList>{children}</OrderedList>;
};

// PropTypes for MDXOl
MDXOl.propTypes = {
  /**
   * The content to be displayed inside the ordered list.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXLi` is a React component for rendering a list item.
 *
 * @param {string} children - The content to be displayed inside the list item.
 */
export const MDXLi = ({ children }) => {
  return <ListItem>{children}</ListItem>;
};

// PropTypes for MDXLi
MDXLi.propTypes = {
  /**
   * The content to be displayed inside the list item.
   */
  children: PropTypes.node.isRequired,
};
