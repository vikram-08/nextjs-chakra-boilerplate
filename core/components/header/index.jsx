"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import ToggleSwitch from "@/theme/toggle";
import { textAppName } from "@/constants";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import {
  Menu,
  LanguageSelect,
  AlertDialogModal,
  Image,
  Link,
  Search,
  MegaMenu,
} from "@/components";
import { pages } from "@/config";
import {
  IconSearch,
} from "@tabler/icons-react";


/**
 * Header component for the website.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.userTheme - The theme selected by the user.
 * @returns {JSX.Element} - Rendered component.
 */

export default function Header({ userTheme, ...resProps }) {

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const navItems = [
    {
      "label": "Sample",
      "children": [
        {
          "label": "Latest Link",
          "href": "link",
          "subLabel": "SubLabel",
          "icon": "IconHourglassHigh"
        }
      ]
    }
  ]

  /**
   * Toggles the alert dialog.
   */

  const closeSearchModel = () => setIsAlertOpen(false);

  const handleAlertDialog = () => {
    setIsAlertOpen(!isAlertOpen);
  };

  return (
    <header
      aria-label="Header"
      className="w-full h-20 p-2 phone:p-4 lg:flex-center top-0 z-50 sticky border-b border-slate-900/10 bg-opacity-70 dark:bg-black dark:border-gray-800 dark:bg-opacity-50 backdrop-filter"
    >
      <Box className="h-full flex flex-row justify-between items-center gap-2 max-w-screen-monitor m-auto">
        <Link href={pages.home} showUnderline={false}>
          <Box className="flex flex-row items-center whitespace-nowrap gap-2">
            <Image
              src="/media/logo.jpg"
              alt="Logo"
              loading="eager"
              priority={true}
              height={65}
              width={65}
            />
            <Text className="font-bold hidden phone:block">{textAppName}</Text>
          </Box>
        </Link>
        <Box className="flex flex-row items-center h-full gap-2 phone:gap-4">
          <MegaMenu navItems={navItems} />
          <InputGroup className="block">
            <Input
              variant={"outline"}
              placeholder="Search"
              onClick={handleAlertDialog}
              className="h-10 py-1 bg-slate-100 dark:bg-gray-800 w-full"
            />
            <InputLeftElement>
              <IconSearch />
            </InputLeftElement>
          </InputGroup>
          <AlertDialogModal
            isOpen={isAlertOpen}
            onClose={setIsAlertOpen}
            isCentered={false}
            title="Search content"
            showCloseIcon={true}
          >
            <Search closeSearch={closeSearchModel} />
          </AlertDialogModal>
          <LanguageSelect />
          <Box className="phone-max:hidden">
            <ToggleSwitch {...resProps} />
          </Box>
          <Menu navItems={navItems} {...resProps} />
        </Box>
      </Box>
    </header>
  );
}

// PropTypes for Header component

Header.propTypes = {
  userTheme: PropTypes.string, // The theme selected by the user.
};
