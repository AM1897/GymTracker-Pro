import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'sv' : 'en')}
      className="px-3 py-1 rounded-md text-sm font-medium transition-colors dark:hover:bg-slate-700/50 hover:bg-gray-200"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'SV' : 'EN'}
    </button>
  );
};

export default LanguageToggle;