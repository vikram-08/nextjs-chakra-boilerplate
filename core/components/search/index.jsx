"use client";
import { capitalizeFirstLetter, debounce, noop } from "@/utils";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Text,
  VStack,
  Center,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "@/components";
import PropTypes from "prop-types";
import { pages } from "@/config";
import { useTranslations } from "next-intl";
import { IconSearch, IconSearchOff } from "@tabler/icons-react";

const SearchResults = ({ results, searchText, closeSearch }) => {
  const t = useTranslations();
  return (
    <VStack spacing={4} align="center" p={4}>
      {results?.length > 0
        ? results.map((result) => (
            <motion.div
              key={result.slug}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="dark:hover:bg-cyan-600 hover:bg-sky-500 hover:text-white"
              style={{ width: "100%" }}
            >
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                width="100%"
                onClick={closeSearch}
              >
                <Link
                  href={`${pages.post}/${result.slug}`}
                  fontWeight="bold"
                  showUnderline={false}
                >
                  <Text display={"inline"} className="text-xl">
                    {result.title}
                  </Text>
                </Link>
              </Box>
            </motion.div>
          ))
        : searchText &&
          results && (
            <Center flexDirection="column" mt={10}>
              <Icon as={IconSearchOff} boxSize={10} />
              <Text align="center" mt={4} fontSize="xl">
                {t("noResults")}
              </Text>
            </Center>
          )}
    </VStack>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  closeSearch: PropTypes.func.isRequired,
};

/**
 * `Search` is a component that provides a search input field.
 *
 * @param {object} props - The component's props.
 * @param {function} [props.onChange] - A callback function to handle changes in the search text.
 *
 * @example
 * <Search onChange={(searchText) => handleSearch(searchText)} />
 */

export default function Search({
  onChange = noop,
  placeholder = "Search (A Minimum of 3 letters are required to search.)",
  closeSearch = noop,
}) {
  const [searchText, setSearchText] = useState();

  /**
   * Handles the input change event and updates the search text.
   * @param {Event} e - The input change event.
   */

  const handleInputChange = debounce((e) => {
    const text = e.target.value;
    text.length >= 3 && setSearchText(text);
    onChange(text);
  }, 2000);

  return (
    <React.Fragment>
      <InputGroup>
        <Input
          variant={"outline"}
          type="search"
          name="search"
          autoFocus={true}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="h-10 mb-10"
        />
        <InputLeftElement>
          <IconSearch />
        </InputLeftElement>
      </InputGroup>
      <SearchResults
        closeSearch={closeSearch}
        searchText={searchText}
      />
    </React.Fragment>
  );
}

Search.propTypes = {
  onChange: PropTypes.func,
};
