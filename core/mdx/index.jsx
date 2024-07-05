import React from "react";
import PropTypes from "prop-types";
import { compileSync, runSync } from "@mdx-js/mdx";
import { Fragment } from "react";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import logger from "@/log";
import { useMDXComponents } from "mdx-components";
import { Box } from "@chakra-ui/react";

/**
 * RenderMDX is a component that compiles and runs MDX content using @mdx-js/mdx.
 * It supports frontmatter, math rendering, and GFM (GitHub Flavored Markdown).
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.content - The MDX content to render.
 *
 * @returns {ReactElement} The rendered MDX content.
 * @example
 * const content = "#Hi";
 * <RenderMDX content={content} />
 */
function RenderMDX({ content }) {
  try {
    // Compile MDX content
    const code = compileSync(content, {
      outputFormat: "function-body",
      baseUrl: import.meta.url,
      remarkPlugins: [remarkDirectiveRehype, remarkGfm, remarkDirective],
      rehypePlugins: [rehypeMdxCodeProps],
      providerImportSource: "@mdx-js/react",
    });

    // Run the compiled code
    const { default: Content = Fragment } = runSync(code, {
      ...runtime,
      baseUrl: import.meta.url,
      useMDXComponents,
    });

    return <Content />;
  } catch (error) {
    logger.error(`Error occurred while rendering MDX content. ${error}`);
    // Handle error gracefully, return an informative error message, or render a fallback component.
    return <Box>Error rendering MDX content. Please check your input.</Box>;
  }
}

// Prop types validation
RenderMDX.propTypes = {
  /**
   * The MDX content to render.
   */
  content: PropTypes.string.isRequired,
};

export default RenderMDX;
