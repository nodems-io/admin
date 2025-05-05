import tr from "@/locales/tr.json";
import en from "@/locales/en.json";

type Locale = "tr" | "en";
type TranslationKeys = keyof typeof tr;

const translations: Record<Locale, Record<TranslationKeys, string>> = {
  tr,
  en,
};

export const getT = (locale: Locale) => {
  const dict = translations[locale] ?? translations["tr"];
  return (key: TranslationKeys): string => dict[key] ?? key;
};
