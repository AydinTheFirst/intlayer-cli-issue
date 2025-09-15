import { t, type Dictionary } from "intlayer";

const translationContent = {
  key: "app",
  content: {
    greet: t({
      en: "Hello, World!",
      tr: "Merhaba, Dünya!",
    }),
  },
} satisfies Dictionary;

export default translationContent;
