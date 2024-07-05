import { pages, siteURL } from "@/config";

export default async function sitemap() {
  const pagesData = Object.values(pages).map((page) => ({
    url: `${siteURL}${page}`,
    lastModified: new Date().toISOString(),
  }));

  return [...pagesData];
}
