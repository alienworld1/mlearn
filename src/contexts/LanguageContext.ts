import { createContext } from 'react';
import type { Language } from '../types';

export interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (languageCode: 'en' | 'es') => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
