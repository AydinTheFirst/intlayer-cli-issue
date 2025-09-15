import { Locales, type Dictionary } from "intlayer";

const translationContent = {
  key: "app",
  locale: Locales.TURKISH,
  content: {
    greet: "Merhaba, Dünya!",
  },
} satisfies Dictionary;

export default translationContent;
