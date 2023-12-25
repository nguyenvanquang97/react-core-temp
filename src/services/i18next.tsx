import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

export const languageResources = {
  en: {translation: en},
  vi: {translation: vi},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;

/** Change languages */
// import { useTranslation } from 'react-i18next';

// function LanguageScreen() {
//  const { t, i18n } = useTranslation(); //i18n instance
//   return (
//     <View>
//       <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
//         <Text>English</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => i18n.changeLanguage("fr")}>
//         <Text>French</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }
