 
const dictionaries = {
  en: () => require('./en.json'),
  ar: () => require('./ar.json'),
}
 
export const getDictionary = async (locale: 'en' | 'ar') =>
  dictionaries[locale]()