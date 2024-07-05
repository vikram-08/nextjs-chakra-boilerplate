import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { languageCodes } from "@/constants";
import logger from "@/log";
import { nonLocaleFolders } from "@/config";
import { removeLocaleFromPath } from "@/utils";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!languageCodes.includes(locale)) notFound();

  const header = headers();
  const path = header.get("x-pathname");
  const requestPath = removeLocaleFromPath(path, locale);

  const isNonLocaleFolder = nonLocaleFolders.every(
    (folder) => !requestPath.includes(folder)
  );

  let globalLocales = {};
  let pageLocales = {};

  try {
    globalLocales = (await import(`@/locales/${locale}.json`)).default;
  } catch (e) {
    logger.error(`Locale: ${locale} \n${e}`);
  }

  if (requestPath && isNonLocaleFolder) {
    try {
      pageLocales = (
        await import(`app/[lang]/${requestPath}/locales/${locale}.json`)
      ).default;
    } catch (e) {
      logger.error(`Locale: ${locale} \n${e}`);
    }
  }

  return { messages: { ...globalLocales, ...pageLocales } };
});
