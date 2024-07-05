import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

/**
 * `MDXTable` is a React component for rendering a table.
 *
 * @param {string} children - The content to be displayed inside the table.
 */
export const MDXTable = ({ children }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="cyan">
        <TableCaption>Table</TableCaption>
        {children}
      </Table>
    </TableContainer>
  );
};

// PropTypes for MDXTable
MDXTable.propTypes = {
  /**
   * The content to be displayed inside the table.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXThead` is a React component for rendering a table header.
 *
 * @param {string} children - The content to be displayed inside the table header.
 */
export const MDXThead = ({ children }) => {
  return <Thead>{children}</Thead>;
};

// PropTypes for MDXThead
MDXThead.propTypes = {
  /**
   * The content to be displayed inside the table header.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXTbody` is a React component for rendering a table body.
 *
 * @param {string} children - The content to be displayed inside the table body.
 */
export const MDXTbody = ({ children }) => {
  return <Tbody>{children}</Tbody>;
};

// PropTypes for MDXTbody
MDXTbody.propTypes = {
  /**
   * The content to be displayed inside the table body.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXTfoot` is a React component for rendering a table footer.
 *
 * @param {string} children - The content to be displayed inside the table footer.
 */
export const MDXTfoot = ({ children }) => {
  return <Tfoot>{children}</Tfoot>;
};

// PropTypes for MDXTfoot
MDXTfoot.propTypes = {
  /**
   * The content to be displayed inside the table footer.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXTr` is a React component for rendering a table row.
 *
 * @param {string} children - The content to be displayed inside the table row.
 */
export const MDXTr = ({ children }) => {
  return <Tr>{children}</Tr>;
};

// PropTypes for MDXTr
MDXTr.propTypes = {
  /**
   * The content to be displayed inside the table row.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXTh` is a React component for rendering a table header cell.
 *
 * @param {string} children - The content to be displayed inside the table header cell.
 */
export const MDXTh = ({ children }) => {
  return <Th>{children}</Th>;
};

// PropTypes for MDXTh
MDXTh.propTypes = {
  /**
   * The content to be displayed inside the table header cell.
   */
  children: PropTypes.node.isRequired,
};

/**
 * `MDXTd` is a React component for rendering a table data cell.
 *
 * @param {string} children - The content to be displayed inside the table data cell.
 */
export const MDXTd = ({ children }) => {
  return <Td>{children}</Td>;
};

// PropTypes for MDXTd
MDXTd.propTypes = {
  /**
   * The content to be displayed inside the table data cell.
   */
  children: PropTypes.node.isRequired,
};
