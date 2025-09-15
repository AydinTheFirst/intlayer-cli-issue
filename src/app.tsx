import { useIntlayer, useLocale } from "react-intlayer";

export default function HelloWorld() {
  const content = useIntlayer("app");
  const { locale, availableLocales, setLocale } = useLocale();

  return (
    <div>
      {content.greet}
      <div>
        <span>Current Locale: {locale}</span>
        <div>
          {availableLocales.map((loc) => (
            <button
              key={loc}
              onClick={() => setLocale(loc)}
              disabled={loc === locale}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
