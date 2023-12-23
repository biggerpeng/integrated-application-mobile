import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import zh from './locales/zh' //中文翻译文本
import en from './locales/en' //英文翻译文本

/* 配置国际化 */

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    }
  })
