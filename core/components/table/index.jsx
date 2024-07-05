import React from "react";
import {
  Table as ChakraTable,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * `Table` component is used to organize and display data efficiently. 
   It renders a `<table>` element by default
 *
 * @string `colorScheme` The visual color appearance of the component
 * @supportedValues "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
 * @string `size` The size of the Table
 * @supportedValues "sm" | "md" | "lg"
 * @string `variant` The variant of the Table
 * @supportedValues "simple" | "striped" | "unstyled"
 * @string `placement` The placement of the table caption. This sets the `caption-side` CSS attribute.
 * @supportedValues "bottom" | "top"
 * @example <Table
        size="lg"
        variant="simple"
        placement="bottom"
        colorScheme="teal"
        title="Test Table Data"
      >
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
 */

export default function Table({
  size = "lg",
  variant = "simple",
  children,
  placement = "bottom",
  colorScheme,
  title,
}) {
  return (
    <TableContainer>
      <ChakraTable variant={variant} colorScheme={colorScheme} size={size}>
        <TableCaption placement={placement}>{title}</TableCaption>
        {children}
      </ChakraTable>
    </TableContainer>
  );
}

Table.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["simple", "striped", "unstyled"]),
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["bottom", "top"]),
  colorScheme: PropTypes.oneOf([
    "whiteAlpha",
    "blackAlpha",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
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
  title: PropTypes.string.isRequired,
};
