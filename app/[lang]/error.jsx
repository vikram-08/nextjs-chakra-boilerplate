"use client";
// Import necessary dependencies
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@chakra-ui/react";
import logger from "@/log";

export default function Error({ error, reset }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Log the error to an error reporting service
    logger.error(`Root level ${error}`);
  }, [error]);

  const handleExitComplete = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 15,
            stiffness: 500,
          }}
          style={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            margin: "auto",
            position: "fixed",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            borderRadius: "8px",
            zIndex: 100,
          }}
          onAnimationComplete={handleExitComplete}
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-2xl font-bold"
          >
            An error occurred: {error.message}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={() => reset()}
              variant="outline"
              size="md"
              mt="1rem"
              className="text-md font-bold"
            >
              Try again
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
