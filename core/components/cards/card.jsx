import {
  Avatar,
  Box,
  Button,
  CardBody,
  Heading,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Stack,
  Skeleton,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "@/components/navigation/link";
import PropTypes from "prop-types";
import React from "react";
import { useTranslations } from "next-intl";
import { ChakraIcon, Image } from "@/components";

/**
 * `Card` is a flexible component used to group and display content in a clear and concise format.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.size] - Use the size prop to change the size and set the value to sm, md, or lg.
 *   @supportedValues "sm" | "md" | "lg"
 * @param {React.ReactNode} props.children - React component (Card content).
 * @param {string} [props.title] - Card heading.
 * @param {string} [props.coverImage] - The image src link.
 * @param {string} [props.alt] - Alternative text for the src attribute.
 * @param {string} [props.variant="elevated"] - Chakra UI provides 4 card variants - elevated, outline, filled, and unstyled. Use the variant prop to change the style of your card.
 *   @supportedValues "outline" | "elevated" | "filled" | "unstyled"
 * @param {string} [props.authorName] - Blog-post author name.
 * @param {string} [props.authorProfileImage] - Blog-post author profile photo link.
 * @param {string} [props.authorProfileLink] - Author profile image link.
 * @param {string} [props.authorDescription] - Short description about the author.
 * @param {string} [props.author] - The author of the component.
 *
 * @example
 * <Card
 *   title="Card Example"
 *   authorName="Segun Adebayo"
 *   authorProfileLink="https://example.com/author/SegunAdebayo"
 *   authorProfileImage="https://example.com/author-profile.jpg"
 *   authorDescription="Creator, Chakra UI"
 *   coverImage="https://example.com/cover-image.jpg"
 *   author="John"
 * >
 *   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
 *   adipisci esse provident voluptate dolores recusandae vero nihil
 *   consequatur, facilis laudantium repellat. Nostrum corrupti beatae fugiat
 *   consectetur a, itaque eveniet laboriosam.
 * </Card>
 */

export default function Card({
  size = "full",
  title,
  coverImage,
  alt,
  children,
  variant = "outline",
  authorName,
  authorProfileImage,
  authorProfileLink,
  authorDescription,
}) {
  // Next-intl hook. Used for locale translations.

  const t = useTranslations();

  return (
    <ChakraCard maxW={size} overflow="hidden" variant={variant}>
      {authorName && (
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Link mx={2} fontWeight="bold" href={authorProfileLink}>
                <Avatar src={authorProfileImage} />
              </Link>
              <Box>
                <Heading size="sm">{authorName}</Heading>
                <Text>{authorDescription}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
      )}
      <CardBody>
        {coverImage && (
          <Image src={coverImage} alt={alt} borderRadius="lg" loading="lazy" />
        )}
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{children}</Text>
        </Stack>
      </CardBody>
      {authorName && <Divider />}
      <CardFooter justify="space-between" flexWrap="wrap">
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<ChakraIcon iconName="like" />}
        >
          {t("textLike")}
        </Button>
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<ChakraIcon iconName="comment" />}
        >
          {t("textComment")}
        </Button>
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<ChakraIcon iconName="share" />}
        >
          {t("textShare")}
        </Button>
      </CardFooter>
    </ChakraCard>
  );
}

Card.propTypes = {
  size: PropTypes.oneOf(["full", "sm", "md", "lg"]),
  title: PropTypes.string,
  coverImage: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["outline", "elevated", "filled", "unstyled"]),
  authorName: PropTypes.string,
  authorProfileImage: PropTypes.string,
  authorProfileLink: PropTypes.string,
  authorDescription: PropTypes.string,
  author: PropTypes.string,
};

/**
 * A reusable card component with skeleton loading state.
 *
 * @component
 * @example
 * <CardSkeleton />
 */
export function CardSkeleton() {
  return (
    <ChakraCard overflow="hidden" shadow="md" border="1px" rounded="lg">
      <CardHeader>
        <Flex alignItems="center">
          <Skeleton height="40px" width="40px" rounded="full" />
          <Stack spacing="2" ml="3" flex="1">
            <Skeleton height="16px" width="80%" />
            <Skeleton height="12px" width="60%" />
          </Stack>
        </Flex>
      </CardHeader>
      <CardBody>
        <Skeleton height="200px" />
        <Stack mt="6" spacing="3">
          <Skeleton height="24px" width="80%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="80%" />
        </Stack>
      </CardBody>
      <CardFooter justify="space-between" mt="4">
        <Button flex="1" variant="ghost">
          <Skeleton height="20px" width="60%" />
        </Button>
        <Button flex="1" variant="ghost">
          <Skeleton height="20px" width="60%" />
        </Button>
        <Button flex="1" variant="ghost">
          <Skeleton height="20px" width="60%" />
        </Button>
      </CardFooter>
    </ChakraCard>
  );
}
