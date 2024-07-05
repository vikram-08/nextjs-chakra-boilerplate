import React from "react";
import { NotFoundPage } from "@/components";
import { languages } from "@/constants";
import { siteURL } from "@/config";

export const metadata = {
  title: "Page Not Found",
  description: `Oops! It looks like the page you’re looking for doesn’t exist.`,
  metadataBase: new URL(siteURL),
  alternates: {
    canonical: "/",
    languages: {
      ...languages,
    },
  },
  openGraph: {
    title: "Page Not Found",
    description: `Oops! It looks like the page you’re looking for doesn’t exist.`,
    images: [
      {
        url: "/media/errors/warning.jpg",
        alt: "Page Not Found",
      },
    ],
  },
};

function NotFound() {
  return <NotFoundPage />;
}

export default NotFound;
