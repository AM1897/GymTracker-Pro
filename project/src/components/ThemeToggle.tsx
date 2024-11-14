import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors dark:hover:bg-slate-700/50 hover:bg-gray-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-300 hover:text-blue-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 hover:text-blue-600" />
      )}
    </button>
  );
}

export default ThemeToggle;