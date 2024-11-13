import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, ChevronUp, Trash2, Calendar } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { WeekContext } from '../context/WeekContext';
import Exercise from './Exercise';

interface PlanWeek {
  weekNumber: number;
  workouts: Record<string, any[]>;
}

export default function TrainingPlan() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { currentWeek } = useContext(WeekContext);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const [weeks, setWeeks] = useState<PlanWeek[]>(() => {
    const saved = localStorage.getItem('trainingPlan');
    return saved ? JSON.parse(saved) : [];
  });

  const handleDeleteWeek = (weekNumber: number) => {
    const updatedWeeks = weeks.filter(week => week.weekNumber !== weekNumber);
    setWeeks(updatedWeeks);
    localStorage.setItem('trainingPlan', JSON.stringify(updatedWeeks));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className={`flex items-center space-x-2 ${
            darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to weekly view</span>
        </button>
        <div className="flex items-center space-x-2">
          <Calendar className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Current Week: {currentWeek}
          </span>
        </div>
      </div>

      <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Training Plan
      </h1>

      {weeks.length === 0 ? (
        <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>No training plans added yet.</p>
          <p className="mt-2">Add your current weekly schedule to start planning.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {weeks.map((week) => (
            <div
              key={week.weekNumber}
              className={`rounded-lg overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-sm`}
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setExpandedWeek(expandedWeek === week.weekNumber ? null : week.weekNumber)}
              >
                <div className="flex items-center space-x-4">
                  <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Week {week.weekNumber}
                  </h3>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteWeek(week.weekNumber);
                    }}
                    className={`p-1.5 rounded-full transition-colors ${
                      darkMode 
                        ? 'text-red-400 hover:bg-gray-700' 
                        : 'text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  {expandedWeek === week.weekNumber ? (
                    <ChevronUp className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  ) : (
                    <ChevronDown className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  )}
                </div>
              </div>

              {expandedWeek === week.weekNumber && (
                <div className="p-4 border-t dark:border-gray-700">
                  <div className="grid gap-4">
                    {Object.entries(week.workouts).map(([day, exercises]) => {
                      const [weekday, type] = day.split(' - ');
                      const isRestDay = type === 'Rest Day';

                      return (
                        <div
                          key={day}
                          className={`p-4 rounded-lg ${
                            darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {weekday} - {type}
                            </h4>
                          </div>
                          {isRestDay ? (
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Rest Day
                            </p>
                          ) : exercises.length > 0 ? (
                            <div className="space-y-4">
                              {exercises.map((exercise, index) => (
                                <Exercise key={index} {...exercise} />
                              ))}
                            </div>
                          ) : (
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              No exercises planned
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}