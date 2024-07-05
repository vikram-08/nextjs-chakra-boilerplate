import React from "react";
import { Image } from "@/components";
import { Box, Button, Text, Divider, Skeleton } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * ContactCard component for creating a card with a title, body, and customizable options.
 * @param {object} props - The component's props.
 * @param {string} props.title - Title of the card.
 * @param {string} props.text - Text content in the card's body.
 * @param {string} props.buttonText - Text for the button.
 * @param {function} props.onClick - Callback function when the button is clicked.
 * @param {string} props.imageSrc - URL of the card image.
 * @param {string} props.minHeight - Minimum height of the card.
 * @param {string} props.minWidth - Minimum width of the card.
 * @example
 * // Example usage of ContactCard:
 * <ContactCard
 *   title="Card Title"
 *   text="This is the card's body text."
 *   buttonText="Click Me"
 *   onClick={() => alert("Button clicked!")}
 *   imageSrc="/your-image.jpg"
 *   minHeight="10rem"
 *   minWidth="80%"
 * />
 */
export default function ContactCard({
  title,
  text,
  buttonText,
  onClick,
  imageSrc,
  minHeight,
  minWidth,
}) {
  return (
    <Box
      // className="dark:bg-black"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      maxW={minWidth}
      minH={minHeight}
      m="auto" // Center the card
    >
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Divider my={3} />
      <Box display="flex" style={{ padding: "2%" }}>
        <Image
          src={imageSrc}
          alt="Card Image"
          boxSize="100px"
          objectFit="contains"
          loading="lazy"
        />
        <Box flex="1" pl={3}>
          <Text fontSize="md">{text}</Text>
          <Button colorScheme="blue" onClick={onClick}>
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  imageSrc: PropTypes.string,
  minHeight: PropTypes.string.isRequired,
  minWidth: PropTypes.string.isRequired,
};

export function ContactCardSkeleton() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      m="auto"
    >
      <Skeleton height="24px" width="80%" mb="3" />
      <Divider my={3} />
      <Box display="flex" style={{ padding: "2%" }}>
        <Skeleton boxSize="100px" borderRadius="lg" mr="3" />
        <Box flex="1">
          <Skeleton height="16px" width="100%" mb="2" />
          <Skeleton height="16px" width="80%" />
        </Box>
      </Box>
    </Box>
  );
}
