"use client";
import React from "react";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Box,
} from "@chakra-ui/react";
import Link from "@/components/navigation/link";
import PropTypes from "prop-types";
import { pages } from "@/config";
import { ChakraIcon } from "@/components";
import { IconChevronRight } from "@tabler/icons-react";

/**
 * Breadcrumb component for creating breadcrumb trails with Chakra UI styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string|React.Element} [props.separator="/"] - The visual separator between each breadcrumb item.
 * @param {Array} props.items - An array of breadcrumb items to display.
 * @returns {JSX.Element} Breadcrumb component.
 *
 * @example
 * // Example usage of Breadcrumb:
 * const breadcrumbItems = [
 *   { label: "Home", link: "/" },
 *   { label: "Products", link: "/products" },
 *   { label: "Category", link: "/products/category" },
 *   { label: "Current Page", link: "#" },
 * ];
 *
 * <Breadcrumb separator=">" items={breadcrumbItems} />
 */
function Breadcrumb({ separator = <IconChevronRight />, items = [] }) {
  return (
    <Box className="m-auto max-w-screen-monitor p-4">
      <ChakraBreadcrumb separator={separator}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href={pages.home}>
            <ChakraIcon iconName="home" size={25} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map(
          (item, index) =>
            item.label && (
              <BreadcrumbItem
                key={index}
                isCurrentPage={index === items.length - 1}
              >
                <BreadcrumbLink
                  as={index === items.length - 1 ? Text : Link}
                  href={item.link}
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            )
        )}
      </ChakraBreadcrumb>
    </Box>
  );
}

Breadcrumb.propTypes = {
  separator: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
