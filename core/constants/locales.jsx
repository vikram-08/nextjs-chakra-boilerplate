export * as en from "@/locales/en.json";
export * as hi from "@/locales/hi.json";

export const languageCodes = ["en", "hi",];

export const languages = {
  en: "en",
  hi: "hi",
};

export function getLanguageString(code) {
  // Function to get the corresponding language string based on the code
  switch (code) {
    case "en":
      return "English";
    case "hi":
      return "हिन्दी";
    default:
      return "Unknown";
  }
}
