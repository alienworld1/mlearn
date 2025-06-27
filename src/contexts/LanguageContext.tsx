import { useState, useEffect, type ReactNode } from 'react';
import { LanguageContext, type LanguageContextType } from './LanguageContext';
import { languages } from '../data/translations';
import type { Language } from '../types';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0],
  ); // Default to English

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('mlearn-language');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (languageCode: 'en' | 'es') => {
    const language = languages.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(language);
      localStorage.setItem('mlearn-language', languageCode);
      // Update document language attribute for accessibility
      document.documentElement.lang = languageCode;
    }
  };

  const t = (key: string): string => {
    return currentLanguage.translations[key] || key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
