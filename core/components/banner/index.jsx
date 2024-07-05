import React from "react";
import { Image } from "@/components";
import PropTypes from "prop-types";
import "@/components/banner/styles.css";
import { Box, Flex, Skeleton } from "@chakra-ui/react";

/**
 * PageBanner component displays a banner with heading, subheading, and description text.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.headingText - The main heading text of the banner.
 * @param {string} props.subheadingSplitWord - The first part of the subheading text.
 * @param {string} props.subheadingText - The highlighted part of the subheading text.
 * @param {string} [props.bannerColor='blue'] - The color theme of the banner, defaults to 'blue'. Options are 'purple', 'blue', 'black'.
 * @param {string} props.descriptionText - The description text of the banner.
 *
 * @example
 * // Usage example
 * <PageBanner
 *   headingText="Welcome to Our Site"
 *   subheadingSplitWord="Experience the"
 *   subheadingText="Future"
 *   bannerColor="purple"
 *   descriptionText="Discover the latest innovations and trends in technology with us."
 * />
 */
export default function PageBanner({
  headingText,
  subheadingSplitWord,
  subheadingText,
  bannerColor = "blue",
  descriptionText,
}) {
  const darkColors = {
    blue: "bg-gradient-blue",
    purple: "bg-gradient-purple",
    black: "bg-gradient-black",
  };

  const selectedDarkColor = darkColors[bannerColor] || darkColors.blue;

  return (
    <section
      className={`LHLBannerSection bg-gray-50 force-full-width relative mx-auto h-fit w-full bg-light-background bg-dot-container bg-cover pb-8 lg:pb-[72px] pt-16 dark:${selectedDarkColor}`}
    >
      <Box className="flex h-fit flex-col items-center justify-center">
        <Box className="relative z-20 flex w-full flex-1 flex-col  items-center space-y-4 px-4 md:px-0">
          <span className="LHLBannerHeading bg-gradient-to-r text-[20px] font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text text-transparent from-[#8A63D2] to-[#29ABE2] lg:text-[32px]">
            {headingText}
          </span>
          <h1 className="text-[28px] font-extrabold leading-[34px] tracking-tight md:text-[40px] md:leading-[48px] lg:text-5xl lg:leading-[55px] w-full max-w-[740px] !whitespace-pre-line text-center">
            {subheadingSplitWord}
            <span className="LHLBannerSubHead bg-gradient-to-r bg-clip-text text-transparent from-blue via-blue to-fade-blue dark:to-teal-blue">
              {subheadingText}
            </span>
          </h1>
          <p className="dark:text-white text-[16px] leading-[22px] md:text-[19px] md:leading-[26px] lg:text-[24px] lg:leading-[36px] md:font-medium text-center">
            {descriptionText}
          </p>
        </Box>
      </Box>
    </section>
  );
}

PageBanner.propTypes = {
  headingText: PropTypes.string.isRequired,
  subheadingSplitWord: PropTypes.string.isRequired,
  subheadingText: PropTypes.string.isRequired,
  bannerColor: PropTypes.oneOf(["purple", "blue", "black"]),
  descriptionText: PropTypes.string.isRequired,
};

/**
 * NewBanner Component
 *
 * A component to showcase the reasons for choosing NewBanner.
 *
 * @component
 *
 * @param {string} firstText - The title for the first section.
 * @param {string} secondText - The content for the first section.
 * @param {string} title - The main title of the component.
 * @param {string} description - The description of the component.
 * @param {string} bannerImage - The URL of the banner image.
 * @example
 * // Example usage of NewBanner component
 * <NewBanner
 *   firstText="Demystifying Technology"
 *   secondText="MyApp is the brainchild of four friends on a mission to demystify technology..."
 *   title="Why MyApp?"
 *   description="MyApp is the brainchild of four friends on a mission to demystify technology. With a shared passion for all things tech, we have embarked on this journey to make the digital world accessible to everyone."
 *   bannerImage="/media/general/about-us.png"
 * />
 */
export function NewBanner({
  firstText,
  secondText,
  title,
  description,
  bannerImage,
}) {
  return (
    <section className="mx-auto flex w-full flex-col items-center pb-8 mt-5 md:pt-0 md:mt-2">
      <Box className="z-10">
        <Box className="mx-auto mb-0 text-[40px] font-extrabold">
          <Box className="z-10">
            <Box className="css-1gzxeik">
              <h2 className="mt-4 mb-10 md:m-8 px-4 text-center text-[28px] font-extrabold leading-8 md:text-[40px] md:leading-[48px] dark:text-white">
                {firstText}{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3DBFF5] to-[#6F42C1]">
                  {secondText}
                </span>
              </h2>
            </Box>
          </Box>
        </Box>
        <Box className="w-full text-center place-items-end items-center text-gray-700 dark:text-dark-gray-700 md:max-w-xl lg:grid lg:gap-x-16 lg:text-left lg:max-w-none lg:grid-cols-2">
          <Box className="w-full space-y-4">
            <Box className="css-100qw9n">
              <Box className="glassmorphism m-auto w-[300px] flex-shrink-0 rounded-2xl border border-gray-200 bg-white !bg-opacity-40 px-4 pb-4 pt-4 dark:border-dark-gray-200 dark:bg-black xs:w-[340px] lg:w-[400px]">
                <Box className="flex w-full dire flex-col">
                  <h2 className="w-fit text-center text-[20px] md:text-[21px] lg:text-left text-transparent bg-gradient-to-r from-[#3DBFF5] to-[#6F42C1] bg-clip-text font-extrabold uppercase tracking-widest leading-[24.2px] md:leading-[30px] lg:leading-[36px]">
                    {title}
                  </h2>

                  <Box className="p-4 mt-5 md:p-0 blue-link text-sm text-gray-600 dark:text-dark-gray-600 dark:text-white">
                    <p>{description}</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="relative mt-6 h-[224px] w-full md:h-[312px] lg:mt-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              alt="banner image"
              src={bannerImage}
              loading="eager"
              decoding="async"
              data-img="fill"
              sizes="100vw"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}

// Define PropTypes for the component
NewBanner.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bannerImage: PropTypes.string.isRequired,
};

export const BannerSkeleton = () => {
  return (
    <Box position="relative" width="100%" height="300px">
      <Skeleton width="100%" height="100%" />
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        p="4"
        bg="rgba(0, 0, 0, 0.5)"
        borderRadius="md"
        width="80%"
      >
        <Skeleton height="30px" width="80%" />
      </Flex>
    </Box>
  );
};
