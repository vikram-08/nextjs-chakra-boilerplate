/** @returns {import('mdx/types.js').MDXComponents} */

import mdxComponents from "@/mdx-components";

export function useMDXComponents(components) {
  return {
    ...components,
    ...mdxComponents,
  };
}
