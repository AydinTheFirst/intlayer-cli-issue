import { t, type Dictionary } from "intlayer";

const translationContent = {
  key: "app",
  content: {
    greet: t({ tr: "Merhaba, Dünya!", en: "Hello, World!", es: "¡Hola, mundo!" }


    )
  }
} satisfies Dictionary;

export default translationContent;