import config from "@/config/app.json";

export default config;
export const pages = config.pages;
export const nonLocaleFolders = config.nonLocaleFolders;
export const siteURL = process.env.NEXT_PUBLIC_BASE_URL;
export const environment = process.env.NEXT_PUBLIC_ENV;
export const appTheme = config.appTheme;
