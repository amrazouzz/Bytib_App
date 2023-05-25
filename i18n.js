import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translation/en.json'
import tr from './translation/tr.json'
import ar from './translation/ar.json'



const resources = {
    en: {
      translation: en
    },
    ar: {
      translation: ar
    },
    tr: {
      translation: tr
    }
  };
  
  i18n
      .use(initReactI18next) 
      .init({
      resources,
      lng: "en", 
      interpolation: {
        escapeValue: false 
      },
      react:{
          useSuspense: false
      }
    });
  
    export default i18n;