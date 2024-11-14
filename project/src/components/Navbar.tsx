import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Moon, Sun, Globe } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import WeekIndicator from './WeekIndicator';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { t, toggleLanguage, language } = useContext(LanguageContext);
  const location = useLocation();

  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-indigo-600'} text-white shadow-lg sticky top-0 z-50 safe-top`}>
      <div className="container mx-auto px-4 py-3 sm:py-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8" />
              <h1 className="text-xl sm:text-2xl font-bold">{t('app.title')}</h1>
            </div>
            <div className="flex items-center space-x-2 sm:hidden">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Switch language"
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end space-x-4">
            <WeekIndicator />
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center space-x-1"
                aria-label="Switch language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}