import React from "react";
import PropTypes from "prop-types";
import Image from "@/components/image";

/**
 * `MDXImage` is a React component for rendering images.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.src - The URL of the image.
 * @param {string} [props.alt] - The alternative text for the image.
 * @param {string} [props.title] - The title of the image.
 */
export const MDXImage = ({ src, alt, title }) => {
  return <Image src={src} alt={alt} title={title} height={100} width={100} />;
};

// PropTypes for MDXImage
MDXImage.propTypes = {
  /**
   * The URL of the image.
   */
  src: PropTypes.string.isRequired,
  /**
   * The alternative text for the image.
   */
  alt: PropTypes.string,
  /**
   * The title of the image.
   */
  title: PropTypes.string,
};
