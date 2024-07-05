import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * A reusable blockquote component with customizable styles.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The content inside the blockquote.
 * @example <Blockquote>Welcome</BlockQuote>
 */
function Blockquote({ children }) {
  return (
    <Box
      borderLeft="4px solid"
      padding="0.5rem"
      margin="0.5rem 0"
      borderRadius="2px"
      fontStyle="italic"
      as="blockquote"
    >
      {children}
    </Box>
  );
}

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blockquote;

export function BlockquoteSkeleton() {
  return (
    <Box
      borderLeft="4px solid"
      padding="0.5rem"
      margin="0.5rem 0"
      borderRadius="2px"
      fontStyle="italic"
      as="blockquote"
    >
      <Skeleton height="20px" width="80%" />
    </Box>
  );
}
