import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

/**
 * A card component to display content with an icon, heading, description, and a button.
 * @param {Object} props - The component's props.
 * @param {string} props.heading - The heading text.
 * @param {string} props.description - The description text.
 * @param {React.Node} props.icon - The icon component to display.
 * @param {string} props.buttonText - The text for the button.
 * @param {string} props.href - The URL to link when the button is clicked.
 */
const Card = ({ heading, description, icon, buttonText, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"} href={href}>
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export const CardSkeleton = () => {
  const cards = ["a", "b", "c"];

  return (
    <Box p={4}>
      <SimpleGrid
        minChildWidth="250px" // Minimum width for each child
        spacing="6" // Space between grid items
        width="100%"
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display={"flex"}
            flexDirection={"column"}
            position={"relative"}
            boxShadow="md"
            p={4}
          >
            <Skeleton height="20px" width="20%" mb={4} />
            <SkeletonCircle size="14" position={"absolute"} right={0} mr={4} />
            <Skeleton height="16px" width="30%" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

/**
 * A feature component that displays a collection of cards.
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title text.
 * @param {string} props.subtitle - The subtitle text.
 * @param {Array} props.cards - An array of card objects.
 * @example
 * // Usage example:
 * <Features
 *   title="Feature Title"
 *   subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
 *   cards={[
 *     {
 *       heading: "Card 1",
 *       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 *       icon: <Icon as={FcAssistant} w={10} h={10} />,
 *       buttonText: "Learn More",
 *       href: "#",
 *     },
 *     {
 *       heading: "Card 2",
 *       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 *       icon: <Icon as={FcCollaboration} w={10} h={10} />,
 *       buttonText: "Learn More",
 *       href: "#",
 *     },
 *     // Add more card objects as needed
 *   ]}
 * />
 */
const Features = ({ title, subtitle, cards }) => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          {title}
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          {subtitle}
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {cards.map((card, index) => (
            <Card
              key={card.heading}
              heading={card.heading}
              description={card.description}
              icon={card.icon}
              buttonText={card.buttonText}
              href={card.href}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

Features.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      buttonText: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Features;

export const FeaturesSkeleton = () => {
  const cards = ["a", "b", "c"];

  return (
    <Box p={4}>
      <SimpleGrid minChildWidth="250px" spacing="6" width="100%">
        {cards.map((key) => (
          <Box
            key={key}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p={4}
          >
            <Skeleton height="120px" width="100%" my={2} borderRadius="xl" />
            <Skeleton height="20px" width="80%" mb={4} />
            <Skeleton height="16px" width="60%" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
