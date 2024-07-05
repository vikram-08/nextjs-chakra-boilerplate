"use client";
import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MaintenancePage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      p={8}
      direction="column"
      textAlign="center"
      className="mt-20"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        mt={8}
      >
        <Image
          src="/media/general/maintenance.png"
          width={200}
          height={200}
          alt="Maintenance"
          rounded="md"
        />
      </motion.div>

      <Box mt={4}>
        <Text fontSize="3xl" fontWeight="bold">
          Site Under Maintenance
        </Text>
        <Text mt={2}>
          We are currently performing maintenance on our website. Please check
          back later.
        </Text>
      </Box>
    </Flex>
  );
};

export default MaintenancePage;
