import React, { createContext, useState, useEffect } from 'react';

interface WeekContextType {
  currentWeek: number;
  startDate: Date | null;
  resetWeeks: () => void;
}

export const WeekContext = createContext<WeekContextType>({
  currentWeek: 1,
  startDate: null,
  resetWeeks: () => {},
});

export function WeekProvider({ children }: { children: React.ReactNode }) {
  const [startDate, setStartDate] = useState<Date | null>(() => {
    const saved = localStorage.getItem('trainingStartDate');
    return saved ? new Date(saved) : null;
  });

  const [currentWeek, setCurrentWeek] = useState<number>(() => {
    if (!startDate) return 1;
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - start.getTime());
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    return diffWeeks;
  });

  useEffect(() => {
    if (!startDate) {
      const today = new Date();
      setStartDate(today);
      localStorage.setItem('trainingStartDate', today.toISOString());
    }
  }, []);

  useEffect(() => {
    if (startDate) {
      // Update weekly
      const interval = setInterval(() => {
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - startDate.getTime());
        const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
        setCurrentWeek(diffWeeks);
      }, 1000 * 60 * 60 * 24); // Check every day

      return () => clearInterval(interval);
    }
  }, [startDate]);

  const resetWeeks = () => {
    const today = new Date();
    setStartDate(today);
    setCurrentWeek(1);
    localStorage.setItem('trainingStartDate', today.toISOString());
  };

  return (
    <WeekContext.Provider value={{ currentWeek, startDate, resetWeeks }}>
      {children}
    </WeekContext.Provider>
  );
}