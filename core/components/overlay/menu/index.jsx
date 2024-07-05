"use client";
import { DrawerMenu, ChakraIcon, Link as NextLink } from "@/components";
import { getLanguageString, languageCodes } from "@/constants";
import PropTypes from "prop-types";
import {
  MenuButton,
  Menu as ChakraMenu,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Flex,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Icon,
  SimpleGrid,
  PopoverBody,
  PopoverArrow,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { usePathname } from "@/components/navigation/link";
import ToggleSwitch from "@/theme/toggle";
import Link from "next/link";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

/**
 * `LanguageSelect` is a component for rendering a language selection menu.
 * It provides a button that, when clicked, opens a menu with language options.
 *
 * @param {object} props - The component's props.
 *
 * @example
 * <LanguageSelect />
 */

export function LanguageSelect({ isLazy = true, showOnMenu = false }) {
  const path = usePathname();

  return (
    <ChakraMenu isLazy={isLazy}>
      <MenuButton
        title="Language"
        as={IconButton}
        aria-label="Language"
        icon={<ChakraIcon iconName="language" size={20} />}
        variant="outline"
        className={`leading-4 ${showOnMenu ? "" : "!hidden phone:!inline-flex"}`}
      />
      <MenuList className="opacity-[1] p-2">
        {languageCodes.map((locale) => (
          <Link key={locale} href={`/${locale}${path}`}>
            <MenuItem>{getLanguageString(locale)}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </ChakraMenu>
  );
}

LanguageSelect.propTypes = {
  isLazy: PropTypes.bool,
  showOnMenu: PropTypes.bool,
};

/**
 * `Menu` is a component for rendering a menu with an associated drawer.
 * It provides a button that, when clicked, opens a drawer menu with additional options.
 *
 * @param {object} props - The component's props.
 * @param {ReactNode} props.navItems - The content to be displayed within the menu.
 *
 * @example
 * <Menu navItems={[ {
        label: "Latest Posts",
        href: "pages.blog",
        subLabel: "Read our most recent blog posts",
        icon: IconHourglassHigh
      }]} />
 */

export default function Menu({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleDrawerMenu = () => setIsOpen(!isOpen);

  const handleClick = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
    } else {
      setOpenMenu(index);
    }
  };

  return (
    <ChakraMenu>
      <MenuButton
        as={IconButton}
        aria-label="Main menu"
        className="!hidden phone-max:!flex cursor-pointer"
        icon={<ChakraIcon iconName="menu" size={20} />}
        onClick={handleDrawerMenu}
        variant="outline"
      />
      <DrawerMenu title="Menu" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Box className="flex items-center justify-end pb-4 gap-4">
          <ToggleSwitch />
          <LanguageSelect showOnMenu={true} />
        </Box>
        <VStack align="start">
          {navItems.map((item, index) => (
            <Box key={item.label} width="100%">
              <Box>
                <Flex
                  as="button"
                  onMouseEnter={() => handleClick(index)}
                  align="center"
                  justify="space-between"
                  width="100%"
                  px={4}
                  className="border-2 text-white opacity-80 bg-cyan-500 dark:bg-teal-500 hover:opacity-100"
                  py={2}
                  borderRadius="md"
                >
                  <Text>{item.label}</Text>
                </Flex>
              </Box>
              <Collapse in={openMenu === index} animateOpacity>
                <VStack align="start" px={4} mt={2}>
                  {item.children.map((child) => (
                    <Flex
                      key={child.label}
                      align="center"
                      my={2}
                      className="w-full p-2 rounded hover:bg-slate-200 hover:dark:bg-gray-800 "
                    >
                      <NextLink
                        showUnderline={false}
                        href={child.href}
                        onClick={handleDrawerMenu}
                      >
                        <Box>
                          <child.icon />
                        </Box>
                        <Box>
                          <Text fontWeight="bold">{child.label}</Text>
                          <Text fontSize="sm">{child.subLabel}</Text>
                        </Box>
                      </NextLink>
                    </Flex>
                  ))}
                </VStack>
              </Collapse>
            </Box>
          ))}
        </VStack>
      </DrawerMenu>
    </ChakraMenu>
  );
}

Menu.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          subLabel: PropTypes.string.isRequired,
          icon: PropTypes.elementType.isRequired,
        })
      ),
    })
  ).isRequired,
};

/**
 * DesktopSubNav component renders a link with a label and subLabel.
 * It includes a right arrow icon that animates on hover.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The main label of the link.
 * @param {string} props.href - The URL that the link points to.
 * @param {string} props.icon - The link icon.
 * @param {string} props.subLabel - The sub-label of the link.
 */

const DesktopSubNav = ({ label, href, subLabel, icon }) => {
  return (
    <NextLink
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      showUnderline={false}
    >
      <Stack direction="row" align="center">
        <Flex align="center">
          {icon && <Icon as={icon} mr={2} w={5} h={5} />}
          <Box>
            <Text fontWeight={500}>{label}</Text>
            <Text fontSize="sm">{subLabel}</Text>
          </Box>
        </Flex>
        <Flex
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: 1, transform: "translateX(0)" }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon w={5} h={5} as={IconChevronRight} />
        </Flex>
      </Stack>
    </NextLink>
  );
};

DesktopSubNav.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  subLabel: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // Optional prop for icon
};

/**
 * MegaMenu component renders a navigation menu with popovers for each item.
 * Each item can have children that are displayed in a grid inside a popover.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.navItems - An array of navigation items.
 */
export const MegaMenu = ({ navItems = [] }) => {
  return (
    <Box>
      <Flex minH="60px" py={{ base: 2 }} px={{ base: 4 }} align="center">
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Stack direction="row" spacing={4}>
              {navItems.map((navItem) => (
                <Box key={navItem.label}>
                  <Popover trigger="hover">
                    {({ isOpen }) => (
                      <React.Fragment>
                        <PopoverTrigger>
                          <Text
                            className="whitespace-nowrap cursor-pointer"
                            p={2}
                            fontSize="md"
                            fontWeight={500}
                            _hover={{
                              textDecoration: "none",
                            }}
                          >
                            {navItem.label}
                            <Icon
                              as={IconChevronDown}
                              ml={2}
                              className="align-middle"
                              transition="transform 0.2s ease"
                              transform={
                                isOpen ? "rotate(180deg)" : "rotate(0deg)"
                              }
                            />
                          </Text>
                        </PopoverTrigger>

                        {navItem.children && (
                          <PopoverContent
                            boxShadow="xl"
                            p={4}
                            rounded="xl"
                            minW={{
                              base: "xs",
                              md: "xl",
                            }}
                          >
                            <PopoverArrow />
                            <PopoverBody>
                              <SimpleGrid
                                columns={{
                                  base: 1,
                                  md: 2,
                                }}
                                spacing={4}
                              >
                                {navItem.children.map((child) => (
                                  <DesktopSubNav key={child.label} {...child} />
                                ))}
                              </SimpleGrid>
                            </PopoverBody>
                          </PopoverContent>
                        )}
                      </React.Fragment>
                    )}
                  </Popover>
                </Box>
              ))}
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

MegaMenu.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          subLabel: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
