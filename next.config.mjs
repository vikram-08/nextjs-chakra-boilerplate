/** @type {import("next").NextConfig} */

import createMDX from "@next/mdx"
import createNextIntlPlugin from "next-intl/plugin"
import remarkGfm from "remark-gfm"
import remarkDirective from "remark-directive"
import rehypeMdxCodeProps from "rehype-mdx-code-props"
import remarkDirectiveRehype from "remark-directive-rehype"

// Locales config
const withNextIntl = createNextIntlPlugin("./app/i18n.js")

// MDX components config
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkDirectiveRehype, remarkGfm, remarkDirective],
    rehypePlugins: [rehypeMdxCodeProps],
  },
})

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  output: "standalone",
  experimental: {},
  poweredByHeader: false,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const mdxConfig = withMDX(nextConfig)

export default withNextIntl(mdxConfig)
