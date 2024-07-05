import React from "react";
import PropTypes from "prop-types";
import SandBox from "@/components/sand-box";
import { Admonition, Blockquote, Code, CodeHighlight } from "@/components";
import { Box } from "@chakra-ui/react";

/**
 * `MDXCode` is a React component for rendering code with syntax highlighting and copy-to-clipboard functionality.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The code text that should be visible on the UI.
 * @param {string} [props.className] - For syntax highlighting.
 * @param {boolean} [props.live=false] - Flag to enable live code editing.
 */
export const MDXCode = ({ children, className, live = false }) => {
  return live ? (
    <Box className="w-full m-auto my-4">
      <SandBox
        theme="dark"
        template="react"
        files={{
          "/App.js": children,
        }}
      />
    </Box>
  ) : className ? (
    <Code code={children} className={className} allowToCopy />
  ) : (
    <CodeHighlight colorScheme="red">{children}</CodeHighlight>
  );
};

MDXCode.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  live: PropTypes.bool,
};

/**
 * `MDXBlockquote` is a React component for rendering blockquote elements.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The content to be displayed inside the blockquote.
 */
export const MDXBlockquote = ({ children }) => (
  <Blockquote>{children}</Blockquote>
);

MDXBlockquote.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXAdmonitionSuccess` is a React component for rendering admonition blocks with a specific status (Success).
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The content to be displayed inside the admonition block.
 */
export const MDXAdmonitionSuccess = ({ children }) => (
  <Admonition status={"success"}>{children}</Admonition>
);

MDXAdmonitionSuccess.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXAdmonitionDanger` is a React component for rendering admonition blocks with a specific status (Danger).
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The content to be displayed inside the admonition block.
 */
export const MDXAdmonitionDanger = ({ children }) => (
  <Admonition status={"danger"}>{children}</Admonition>
);

MDXAdmonitionDanger.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXAdmonitionInfo` is a React component for rendering admonition blocks with a specific status (Info).
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The content to be displayed inside the admonition block.
 */
export const MDXAdmonitionInfo = ({ children }) => (
  <Admonition status={"info"}>{children}</Admonition>
);

MDXAdmonitionInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXAdmonitionWarning` is a React component for rendering admonition blocks with a specific status (Warning).
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The content to be displayed inside the admonition block.
 */
export const MDXAdmonitionWarning = ({ children }) => (
  <Admonition status={"warning"}>{children}</Admonition>
);

MDXAdmonitionWarning.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXAdmonitionNote` is a React component for rendering admonition blocks with a specific status (Note).
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The content to be displayed inside the admonition block.
 */
export const MDXAdmonitionNote = ({ children }) => (
  <Admonition status={"note"}>{children}</Admonition>
);

MDXAdmonitionNote.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * `MDXAdmonitionTip` is a React component for rendering admonition blocks with a specific status (Tip).
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.children - The content to be displayed inside the admonition block.
 */
export const MDXAdmonitionTip = ({ children }) => (
  <Admonition status={"tip"}>{children}</Admonition>
);

MDXAdmonitionTip.propTypes = {
  children: PropTypes.node.isRequired,
};
