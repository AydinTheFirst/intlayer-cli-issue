import { Locales, type Dictionary } from "intlayer";

const translationContent = {
  key: "app",
  locale: Locales.ENGLISH,
  content: {
    greet: "Hello, World!"
  }
} satisfies Dictionary;

export default translationContent;