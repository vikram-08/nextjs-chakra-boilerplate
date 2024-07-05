import {
  MDXDivider,
  MDXHeading1,
  MDXHeading2,
  MDXHeading3,
  MDXHeading4,
  MDXHeading5,
  MDXHeading6,
  MDXParagraph,
  MDXStrong,
} from "@/mdx-components/basic";
import {
  MDXAdmonitionDanger,
  MDXAdmonitionInfo,
  MDXAdmonitionNote,
  MDXAdmonitionSuccess,
  MDXAdmonitionTip,
  MDXAdmonitionWarning,
  MDXBlockquote,
  MDXCode,
} from "@/mdx-components/format";
import {
  MDXTable,
  MDXTbody,
  MDXTd,
  MDXTh,
  MDXThead,
  MDXTr,
} from "@/mdx-components/table";
import { MDXImage } from "@/mdx-components/image";
import { MDXLink } from "@/mdx-components/link";
import { MDXIframe } from "@/mdx/components/iframe";
import { MDXLi, MDXOl, MDXUl } from "@/mdx-components/list";
import { MDXYoutube } from "@/mdx-components/audio-video";

const mdxComponents = {
  a: MDXLink,
  blockquote: MDXBlockquote,
  code: MDXCode,
  h1: MDXHeading1,
  h2: MDXHeading2,
  h3: MDXHeading3,
  h4: MDXHeading4,
  h5: MDXHeading5,
  h6: MDXHeading6,
  hr: MDXDivider,
  img: MDXImage,
  li: MDXLi,
  ol: MDXOl,
  ul: MDXUl,
  p: MDXParagraph,
  strong: MDXStrong,
  iframe: MDXIframe,
  table: MDXTable,
  tbody: MDXTbody,
  thead: MDXThead,
  td: MDXTd,
  th: MDXTh,
  tr: MDXTr,
  // em: null,
  // br: null,
  // pre: null,
  // del: null,
  // input: null,
  // section: null,
  // sup: null,
  //** Custom components **//
  success: MDXAdmonitionSuccess,
  danger: MDXAdmonitionDanger,
  info: MDXAdmonitionInfo,
  tip: MDXAdmonitionTip,
  note: MDXAdmonitionNote,
  Warning: MDXAdmonitionWarning,
  caution: MDXAdmonitionWarning,
  youtube: MDXYoutube,
};

export default mdxComponents;
