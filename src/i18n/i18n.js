import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import vi from "./locales/vi.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: { translation: en },
  vi: { translation: vi },
};

// Cấu hình i18n với LanguageDetector
i18n
  .use(I18nextBrowserLanguageDetector) // Kích hoạt LanguageDetector
  .use(initReactI18next) // Tích hợp với React
  .init({
    resources,
    fallbackLng: "en", // Ngôn ngữ mặc định nếu không phát hiện được
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag"], // Thứ tự ưu tiên phát hiện
      caches: ["localStorage", "cookie"], // Lưu trữ ngôn ngữ vào đâu
    },
    interpolation: {
      escapeValue: false, // React tự xử lý XSS
    },
  });

export default i18n;
