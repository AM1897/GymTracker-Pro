import React, { useContext, useMemo } from 'react';
import { RotateCcw, Calendar } from 'lucide-react';
import { WeekContext } from '../context/WeekContext';
import { ThemeContext } from '../context/ThemeContext';

export default function WeekIndicator() {
  const { currentWeek, resetWeeks } = useContext(WeekContext);
  const { darkMode } = useContext(ThemeContext);

  const { yearWeek, formattedDate } = useMemo(() => {
    const now = new Date();
    
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const week = Math.ceil(((diff + start.getTimezoneOffset() * 60 * 1000) / oneWeek));
    
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const date = now.toLocaleDateString('en-US', options);
    
    return {
      yearWeek: week,
      formattedDate: date
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm">
      <div className="flex items-center gap-2">
        <div className={`font-medium ${
          darkMode ? 'text-gray-300' : 'text-gray-100'
        }`}>
          Training Week {currentWeek}
        </div>
        <button
          onClick={resetWeeks}
          className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
          title="Reset training weeks"
        >
          <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
        </button>
      </div>
      <div className={`flex items-center gap-4 sm:gap-6 ${
        darkMode ? 'text-gray-400' : 'text-gray-200'
      }`}>
        <div>
          Week {yearWeek} of {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">{formattedDate}</span>
          <span className="sm:hidden">{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}