import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import _ from "lodash";

import ptbrTranslation from "./locales/pt-br/pt-br.json";
import enTranslation from "./locales/en/en.json";
import esTranslation from "./locales/es/es.json";

const loadLocales = () => {
  const modules = import.meta.glob("../../**/*.i18n.json", {
    as: "raw",
    eager: true,
  });
  let locales = {
    es: { translation: esTranslation },
    "pt-BR": { translation: ptbrTranslation },
    en: { translation: enTranslation },
  };

  Object.entries(modules)
    .sort(([pathA], [pathB]) => {
      const depthA = (pathA.match(/\//g) || []).length;
      const depthB = (pathB.match(/\//g) || []).length;

      return depthA - depthB;
    })
    .forEach(([file, content]) => {
      const fileParsed = file
        .replace(/(\.\.\/\.\.\/)|(locale\/)/gi, "")
        .split("/")
        .reduce((acc, cur, idx, src) => {
          if (idx + 1 === src.length) {
            return (
              cur.split(".")[0] + "." + "translation" + "." + acc.toUpperCase()
            );
          }

          if (acc === "pages") {
            return cur;
          }
          if (acc === "components") acc = "comp";

          return acc + "." + cur;
        });
      locales = _.set(locales, fileParsed, JSON.parse(content));
    });

  return locales;
};

console.log(loadLocales());

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: loadLocales(),
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
