import React from "react";
import PropTypes from "prop-types";
import { AspectRatio } from "@chakra-ui/react";

/**
 * `MDXIframe` is a React component for rendering iframes.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.src - The URL of the iframe source.
 */
export const MDXIframe = ({ src, ...rest }) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe src={src} {...rest} />
    </AspectRatio>
  );
};

// PropTypes for MDXIframe
MDXIframe.propTypes = {
  /**
   * The URL of the iframe source.
   */
  src: PropTypes.string.isRequired,
};
