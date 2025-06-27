import { useLanguage } from '../hooks/useLanguage';

export function LanguageToggle() {
  const { currentLanguage, setLanguage, t } = useLanguage();

  return (
    <div className="relative">
      <label htmlFor="language-select" className="sr-only">
        {t('a11y.languageToggle')}
      </label>
      <select
        id="language-select"
        value={currentLanguage.code}
        onChange={e => setLanguage(e.target.value as 'en' | 'es')}
        className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   hover:border-gray-400 transition-colors duration-200"
        aria-label={t('a11y.languageToggle')}
      >
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
      </select>
    </div>
  );
}
