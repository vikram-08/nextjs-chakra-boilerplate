import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import {Link } from "@/components";;
import PropTypes from "prop-types";
import { getTranslations } from "next-intl/server";

const Footer = async (props) => {
  const t = await getTranslations();

  return (
    <footer
      aria-label="Footer"
      className="p-2 dark:bg-black phone:p-4 lg:flex-center z-50 border-t bg-opacity-70 dark:bg-opacity-50 top-0 w-full sticky backdrop-blur-md"
    >
      <Box>
      <Stack direction="row" spacing={4} justify="center" align="center">
        <Link href="#" _hover={{ color: 'teal.200' }}>Home</Link>
        <Link href="#" _hover={{ color: 'teal.200' }}>About</Link>
        <Link href="#" _hover={{ color: 'teal.200' }}>Services</Link>
        <Link href="#" _hover={{ color: 'teal.200' }}>Contact</Link>
      </Stack>
      <Text textAlign="center" mt={4} fontSize="sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Text>
    </Box>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.object,
};

export default Footer;
