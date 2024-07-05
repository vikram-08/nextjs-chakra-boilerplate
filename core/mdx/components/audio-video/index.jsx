import React from "react";
import PropTypes from "prop-types";
import { AspectRatio } from "@chakra-ui/react";
import { MDXIframe } from "@/mdx/components/iframe";
import { MDXHeading2 } from "@/mdx/components/basic";

/**
 * `MDXYoutube` is a React component for rendering YouTube videos.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.videoId - The YouTube video ID.
 * @param {string} props.title - The title of the YouTube video.
 */
export const MDXYoutube = ({ id: videoId, children: title }) => (
  <React.Fragment>
    <MDXHeading2>{title}</MDXHeading2>
    <AspectRatio ratio={16 / 9}>
      <MDXIframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title} // Pass the title to MDXIframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  </React.Fragment>
);

MDXYoutube.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // Title is required
};
