"use client";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import { Box, Progress } from "@chakra-ui/react";

export default function ReadingProgressBar() {
  const completion = useReadingProgress();
  return (
    <Box className="fixed top-0 z-50 w-full backdrop-blur-3xl">
      <Progress
        value={completion}
        height="4px"
        hasStripe={true}
        colorScheme="yellow"
        className="absolute w-full"
      />
    </Box>
  );
}
