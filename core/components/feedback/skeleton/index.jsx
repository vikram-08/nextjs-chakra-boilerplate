import {
  Skeleton as DefaultSkeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

/**
 * `Skeleton` is a component for displaying loading skeletons to indicate content loading.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.type] - The type of skeleton to render. Can be "circle" or "text".
 * @param {React.ReactNode} [props.children] - The content to be displayed within the skeleton.
 * @param {boolean} [props.isLoaded] - Determines whether the content is loaded or still loading.
 * @example   <Skeleton type="text" isLoaded={isLoaded}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pretium euismod dui, nec bibendum massa interdum id.
          </p>
        </Skeleton>
 */
export default function Skeleton({ type, children, isLoaded }) {
  switch (type) {
    case "circle":
      return <SkeletonCircle isLoaded={isLoaded}>{children}</SkeletonCircle>;
    case "text":
      return <SkeletonText isLoaded={isLoaded}>{children}</SkeletonText>;
    default:
      return <DefaultSkeleton isLoaded={isLoaded}>{children}</DefaultSkeleton>;
  }
}

// Define PropTypes for the Skeleton component
Skeleton.propTypes = {
  type: PropTypes.oneOf(["circle", "text"]),
  children: PropTypes.node,
  isLoaded: PropTypes.bool,
};
