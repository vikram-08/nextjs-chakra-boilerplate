import React from "react";
import { pages, siteURL } from "@/config";
import Home from "@/app/home/page";
import { languages } from "@/constants";

export const metadata = {
  title: "Home Page",
  description: `Welcome to MyApp`,
  metadataBase: new URL(siteURL),
  alternates: {
    canonical: pages.home,
    languages: {
      ...languages,
    },
  },
  openGraph: {
    title: "Home Page",
    description: `Welcome to MyApp`,
    images: [
      {
        url: "/homepage.png",
        alt: "Your Tech Companion",
      },
    ],
  },
};

/**
 * Main page component.
 * This component serves as the entry point for rendering the Home page.
 * @component
 * @returns {JSX.Element} Rendered page
 */

export default function Page() {
  return (
   <Home />
  );
}
