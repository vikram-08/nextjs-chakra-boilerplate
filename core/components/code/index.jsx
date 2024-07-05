"use client";
import {
  Box,
  Button,
  Code as ChakraCode,
  Skeleton,
  SkeletonText,
  useClipboard,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import HighlightJS from "highlight.js";
import { ChakraIcon } from "@/components";
import PropTypes from "prop-types";
/**
 * `CodeHighlight` is a code highlight component.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.colorScheme="yellow"] - Code highlight color.
 * @param {React.ReactNode} props.children - Code text or component that should be visible on the UI.
 * @example
 * <CodeHighlight colorScheme="yellow">
 *   logger.log("Hello world!")
 * </CodeHighlight>
 */

export function CodeHighlight(props) {
  const { colorScheme = "yellow", children } = props;
  return <ChakraCode colorScheme={colorScheme}>{children}</ChakraCode>;
}

CodeHighlight.propTypes = {
  colorScheme: PropTypes.string, // Expected prop type: string
  children: PropTypes.node, // Expected prop type: React node
};

/**
 * `Code` is a React component for rendering code with syntax highlighting and copy-to-clipboard functionality.
 *
 * @param {string} language - The code language for syntax highlighting.
 * @param {string} code - The code text that should be visible on the UI.
 * @param {boolean} allowToCopy - If true, the code copy option will be available for the user.
 * @supportedValues
 *   codeTheme: "dracula" | "github" | "nightOwl" | "nightOwlLight" | "oceanicombineCSSClassesext" | "vsDark" | "vsLight" | "duotoneLight" | "duotoneDark"
 *   language: "jsx" | "tsx" | "swift" | "kotlin" | "objectivec" | "js-extras" | "reason" | "rust" | "graphql" | "yaml" | "go" | "cpp" | "markdown" | "html"
 */

export default function Code(props) {
  const {
    code = "logger.log('Hello world!')",
    allowToCopy = true,
    className = "language-js",
  } = props;

  const codeRef = useRef(null);
  const { onCopy, hasCopied } = useClipboard(code);

  return (
    <Box className="hljs w-full min-h-[4.5rem] m-auto my-4 rounded-xl relative p-4 border-2">
      {allowToCopy && (
        <Button
          onClick={onCopy}
          position={"absolute"}
          marginRight={"1rem"}
          right={0}
        >
          {!hasCopied ? (
            <ChakraIcon iconName="copy" size={20} />
          ) : (
            <ChakraIcon iconName="copied" size={20} />
          )}
        </Button>
      )}
      <pre>
        <code
          ref={codeRef}
          className={`p-4 pr-8 hljs ${className} overflow-x-auto`}
          data-allow-to-copy={allowToCopy}
          dangerouslySetInnerHTML={{
            __html: HighlightJS.highlightAuto(code)?.value,
          }}
        />
      </pre>
    </Box>
  );
}

Code.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string.isRequired,
  allowToCopy: PropTypes.bool,
};

export const CodeSkeleton = () => {
  return (
    <Box className="hljs w-full min-h-[4.5rem] m-auto my-4 rounded-xl relative p-4 border-2">
      <Skeleton height="100%" width="100%">
        <pre>
          <code className="p-4 pr-8 hljs overflow-x-auto">
            <SkeletonText noOfLines={6} spacing="4" />
          </code>
        </pre>
      </Skeleton>
    </Box>
  );
};
