import i18next from 'i18next';
import {AsyncStorage} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {initReactI18next} from 'react-i18next';
import es from './es.json';
import en from './en.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    const language = await AsyncStorage.getItem('preferred-language');
    console.log(language);
    if (!language) {
      // If no data is found, current device language is saved as default
      const lang = RNLocalize.getLocales()[0].languageCode;
      return callback(lang);
    }
    //other wise return the saved language
    callback(language);
  },
  init: () => {},
  cacheUserLanguage: lang => {
    AsyncStorage.setItem('preferred-language', lang);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {//Adding the available languages
      en: en,
      es: es,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
