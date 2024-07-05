"use client";
import { Badge, Image, Link } from "@/components";
import {
  Box,
  Flex,
  HStack,
  Avatar,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { pages } from "@/config";
import { kebabToNormalCase, truncateText } from "@/utils";
import { IconCaretLeft, IconCaretRight } from "@tabler/icons-react";
import { FORWARD_SLASH } from "@/constants";

/**
 * `BlogCarousel` is a wrapper that provides context and focus management for all accordion items.
 * It wraps all accordion items in a div for better grouping.
 *
 * @param {object} props - The component's props.
 * @param {number} [props.slideInterval] - The time interval (in seconds) between slides.
 * @param {string} [props.slideDirection="right"] - The sliding direction (Default is right).
 * @param {string} [props.minHeight] - The CSS max-height property.
 * @param {boolean} [props.showSlideButtons] - If true, slide control buttons will be shown.
 * @param {Array} props.slides - An array of slide objects, where each object contains three properties: `img`, `label`, and `description`.
 *   @supportedFormat [{img: "https://example.com/nature.jpg", label: "Nature", description: "Nature is cool"}]
 * @param {boolean} [props.showSlidesCount] - If true, the current slide count by the total slide count will be shown in the top left corner.
 * @example
 * const slides = [
 *   {
 *     coverImage: "https://example.com/photos/2599537/pexels-photo-2599537.jpeg",
 *     categories: ["Nature", "Travel"],
 *     title: "First Slide",
 *     description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
 *     postLink: "first-slide",
 *     authorName: "John Doe",
 *     authorProfileImage: "https://example.com/photos/author.jpg",
 *     authorUserName: "johndoe",
 *     createdDate: "2023-06-20",
 *   },
 *   {
 *     coverImage: "https://example.com/photos/2714581/pexels-photo-2714581.jpeg",
 *     categories: ["Science"],
 *     title: "Second Slide",
 *     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
 *     postLink: "second-slide",
 *     authorName: "Jane Smith",
 *     authorProfileImage: "https://example.com/photos/author2.jpg",
 *     authorUserName: "janesmith",
 *     createdDate: "2023-06-21",
 *   },
 * ];
 *
 * <BlogCarousel slides={slides} slideInterval={5} slideDirection="right" showSlideButtons={true} showSlidesCount={false} minHeight={"35rem"} />;
 */

export default function BlogCarousel({
  slideInterval = 5,
  slideDirection = "right",
  slides = [],
  minHeight = "35rem",
  showSlideButtons = true,
  showSlidesCount = false,
  minWidth = "35rem",
}) {
  const SLIDES_INTERVAL_TIME = slideInterval * 1000;
  const ANIMATION_DIRECTION = slideDirection;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [ANIMATION_DIRECTION, SLIDES_INTERVAL_TIME, nextSlide, prevSlide]);

  const carouselStyle = {
    transition: "all 0.6s",
    ml: `-${currentSlide * 100}%`,
  };

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    p: "1rem",
    mt: "-1.8rem",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
    borderRadius: "0 0.2rem 0.2rem 0",
    transition: "0.6s ease",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
    },
  };

  return (
    <Box className="w-full mb-8 hidden phone:block">
      <Flex w="full" pos="relative" overflow="hidden" className="rounded-lg">
        <Flex maxH={minHeight} minW={minWidth} w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              {showSlidesCount && (
                <Text fontSize="xs" p="0.6rem 0.8rem" pos="absolute" top="0">
                  {sid + 1} {FORWARD_SLASH} {slidesCount}
                </Text>
              )}
              <Image
                src={slide.coverImage}
                alt="BlogCarousel image"
                height="30rem"
                width="100%"
                loading="lazy"
                className="opacity-70"
              />
              <Stack
                p="0.6rem 0.8rem"
                pos="absolute"
                bottom="0.5rem"
                w="full"
                className="px-10 pb-2 text-white"
              >
                <Wrap fontSize="xs" textTransform="uppercase">
                  {slide.categories.map((category) => (
                    <Link
                      key={category}
                      showUnderline={false}
                      href={`${pages.category}/${category}`} // Adjust link path as needed
                    >
                      <Badge randomColor={true}>
                        {kebabToNormalCase(category)}
                      </Badge>
                    </Link>
                  ))}
                </Wrap>
                <Link
                  display="block"
                  showUnderline={false}
                  className="text-3xl font-bold"
                  href={`${pages.post}/${slide.postLink}`} // Adjust link path as needed
                  mt={2}
                >
                  {slide.title}
                </Link>
                <Text mt={2} fontSize="md">
                  {truncateText(slide.description)}
                </Text>
                <Flex
                  className="gap-4"
                  alignItems="center"
                  justifyContent="start"
                  mt={4}
                >
                  <Avatar
                    className="mr-4"
                    rounded="full"
                    name={slide.authorName}
                    src={slide.authorProfileImage}
                    alt="Author profile image"
                  />
                  <Box>
                    <Link
                      mx={2}
                      className="text-md font-bold"
                      showUnderline={false}
                      href={`/author/${slide.authorUserName}`} // Adjust link path as needed
                    >
                      {slide.authorName}
                    </Link>
                    <Wrap mx={1} fontSize="md">
                      {new Date(slide.updatedAt).toDateString()}
                    </Wrap>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          ))}
        </Flex>
        {showSlideButtons && (
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            <IconCaretLeft />
          </Text>
        )}

        {showSlideButtons && (
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            <IconCaretRight />
          </Text>
        )}
        <HStack justify="center" pos="absolute" bottom="0.6rem" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["0.6rem", null, "1rem"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slide)}
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

BlogCarousel.propTypes = {
  slideInterval: PropTypes.number,
  slideDirection: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      coverImage: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      postLink: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      authorProfileImage: PropTypes.string.isRequired,
      authorUserName: PropTypes.string.isRequired,
      createdDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  showSlideButtons: PropTypes.bool,
  showSlidesCount: PropTypes.bool,
};

export const CarouselSkeleton = () => {
  return (
    <Skeleton
      width="100%"
      borderRadius="xl"
      className="border border-slate-200 dark:border-slate-800 mb-4 hidden phone:block"
    >
      <SkeletonCircle size="md" mx="2" my="4" />
    </Skeleton>
  );
};
