import React from "react";
import PropTypes from "prop-types";
import NextImage from "next/image";
import { Box } from "@chakra-ui/react";

/**
 * Image Component
 *
 * This component renders an image with a skeleton loader and fallback functionality.
 * It uses the Next.js Image component for optimized image handling and Chakra UI for styling.
 *
 * Props:
 * - `src` (string, required): The source URL of the image.
 * - `alt` (string, required): The alt text for the image.
 * - `width` (string|number): The width of the image container.
 * - `height` (string|number): The height of the image container.
 * - `fallbackSrc` (string): The fallback image URL if the main image fails to load.
 * - `bgGradient` (string): The background gradient to apply over the image.
 * - `priority` (bool): If true, the image will be considered high priority and preload.
 * - `quality` (number): The quality of the optimized image (1-100).
 *
 * Usage:
 * ```
 * <Image
 *   src="/images/example.jpg"
 *   alt="Example image"
 *   width="800px"
 *   height="600px"
 *   quality={80}
 *   priority
 * />
 * ```
 */

const Image = (props) => {
  const { src, alt, width = 100, height = 100, priority = false, quality, className, ...rest } = props;

  return (
    <Box
      width={width}
      height={height}
      position="relative"
      overflow="hidden"
      className={className}
      {...rest}
    >
      <NextImage
        src={src}
        alt={alt}
        priority={priority}
        fill={true}
        quality={quality}
        sizes="(max-width: 480px) 100vw,
       (min-aspect-ratio: 626/626) calc((100vh - 184px) * 1.000),
       (max-width: 1096px) calc(100vw - 100px),
       (max-width: 1540px) calc(100vw - 40px),
       1536px"
        className="object-cover"
      />
    </Box>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackSrc: PropTypes.string,
  priority: PropTypes.bool,
  quality: PropTypes.number,
};

export default Image;
