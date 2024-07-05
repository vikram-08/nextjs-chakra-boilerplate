import React from "react";
import PropTypes from "prop-types";
import { Text, Divider } from "@chakra-ui/react";
import { Headings } from "@/components/headings";

/**
 * `MDXHeading1` is a React component for rendering level 1 headings.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the heading.
 */
export const MDXHeading1 = ({ children }) => (
  <Headings as={"h1"} size="2xl" className="my-6">
    {children}
  </Headings>
);

MDXHeading1.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXHeading2` is a React component for rendering level 2 headings.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the heading.
 */
export const MDXHeading2 = ({ children }) => (
  <Headings as={"h2"} size="xl" className="my-4">
    {children}
  </Headings>
);

MDXHeading2.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXHeading3` is a React component for rendering level 3 headings.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the heading.
 */
export const MDXHeading3 = ({ children }) => (
  <Headings as={"h3"} size="lg" className="my-4">
    {children}
  </Headings>
);

MDXHeading3.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXHeading4` is a React component for rendering level 4 headings.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the heading.
 */
export const MDXHeading4 = ({ children }) => (
  <Headings as={"h4"} size="md" className="my-4">
    {children}
  </Headings>
);

MDXHeading4.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXHeading5` is a React component for rendering level 5 headings.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the heading.
 */
export const MDXHeading5 = ({ children }) => (
  <Headings as={"h5"} size="sm" className="my-2">
    {children}
  </Headings>
);

MDXHeading5.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXHeading6` is a React component for rendering level 6 headings.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the heading.
 */
export const MDXHeading6 = ({ children }) => (
  <Headings as={"h6"} size="xs" className="my-2">
    {children}
  </Headings>
);

MDXHeading6.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXParagraph` is a React component for rendering paragraphs.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the paragraph.
 */
export const MDXParagraph = ({ children }) => <Text as={"p"}>{children}</Text>;

MDXParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXStrong` is a React component for rendering bold text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed as bold text.
 */
export const MDXStrong = ({ children }) => (
  <Text as={"strong"}>{children}</Text>
);

MDXStrong.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXDivider` is a React component for rendering dividers.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The content to be displayed inside the divider (optional).
 */
export const MDXDivider = ({ children }) => (
  <Divider size={"md"}>{children}</Divider>
);

MDXDivider.propTypes = {
  children: PropTypes.node,
};
