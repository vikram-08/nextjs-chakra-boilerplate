"use client";
import React, { useState } from "react";
import { Box, Text, Center, Input, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ChakraIcon } from "@/components";

/**
 * FileDropzone component for allowing file uploads via drag-and-drop or file selection.
 *
 * @component
 * @param {Object} props - Component props
 * @param {function} props.onFileDrop - Callback function to handle dropped or selected files.
 * @param {string} [props.border="2px dashed"] - The border style of the dropzone.
 * @param {string} [props.borderColor="gray.200"] - The border color of the dropzone.
 * @param {string} [props.activeBorderColor="green.400"] - The border color when files are being dragged over the dropzone.
 * @param {string} [props.borderRadius="md"] - The border radius of the dropzone.
 * @param {string} [props.padding="4"] - The padding of the dropzone.
 * @param {string} [props.width="300px"] - The width of the dropzone.
 * @param {string} [props.height="200px"] - The height of the dropzone.
 * @param {string} [props.cursor="pointer"] - The cursor style of the dropzone.
 */
function FileDropzone({
  onFileDrop,
  border = "2px dashed",
  borderRadius = "md",
  padding = "4",
  cursor = "pointer",
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);

    // Call the provided callback function to handle the dropped files
    if (onFileDrop) {
      onFileDrop(files);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);

    // Call the provided callback function to handle the selected files
    if (onFileDrop) {
      onFileDrop(files);
    }
  };

  return (
    <label htmlFor="fileDrop">
      <Box
        border={isDragging ? `2px dashed` : border}
        borderRadius={borderRadius}
        padding={padding}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        cursor={cursor}
        position="relative"
      >
        <Center h="100%">
          {isDragging ? (
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ChakraIcon
                iconName="upload"
                size={"4rem"}
                className="text-center"
              />
              <Text>Drop files here</Text>
            </Flex>
          ) : (
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ChakraIcon
                iconName="upload"
                size={"4rem"}
                className="text-center"
              />
              <Text>Drag and drop files or click to select</Text>
            </Flex>
          )}
        </Center>
        <Input
          type="file"
          id="fileDrop"
          visibility={"hidden"}
          onChange={handleFileSelect}
          multiple
        />
      </Box>
    </label>
  );
}

FileDropzone.propTypes = {
  onFileDrop: PropTypes.func.isRequired,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  cursor: PropTypes.string,
};

export default FileDropzone;
