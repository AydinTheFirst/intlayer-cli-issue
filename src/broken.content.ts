import { insert, t, type Dictionary } from "intlayer";

export default {
  key: "broken",
  content: {
    count: t({
      tr: insert("Sayaç değeri: {{count}}"),
      en: insert("Counter value: {{count}}"),
    }),
  },
} satisfies Dictionary;
