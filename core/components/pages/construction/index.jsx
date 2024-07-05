"use client";
import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ConstructionPage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      p={8}
      direction="column"
      className="mt-10"
      textAlign="center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        mt={8}
      >
        <Image
          src="/media/general/crane.png"
          width={300}
          height={300}
          alt="Under Construction"
          rounded="md"
        />
      </motion.div>

      <Box mt={4}>
        <Text fontSize="3xl" fontWeight="bold">
          Site Under Construction
        </Text>
        <Text mt={2}>
          We are currently building something amazing. Please check back later.
        </Text>
      </Box>
    </Flex>
  );
};

export default ConstructionPage;
