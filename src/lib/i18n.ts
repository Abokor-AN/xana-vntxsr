import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "fr",
  messages: {
    fr: {
      message: {
        hello: "Bonjour le monde",
      },
    },
    en: {
      message: {
        hello: "hello world",
      },
    },
    ja: {
      message: {
        hello: "こんにちは、世界",
      },
    },
  },
});

export default i18n;
