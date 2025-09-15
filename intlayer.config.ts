import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.TURKISH, Locales.SPANISH],
    defaultLocale: Locales.ENGLISH,
    requiredLocales: [Locales.ENGLISH, Locales.TURKISH, Locales.SPANISH],
  },
  ai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
};

export default config;
