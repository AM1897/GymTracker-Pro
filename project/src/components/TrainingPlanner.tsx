import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Plus, Edit2, ChevronDown, ChevronUp, Dumbbell, ChevronLeft } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { WorkoutContext } from '../context/WorkoutContext';
import { WeekContext } from '../context/WeekContext';
import Exercise from './Exercise';
import AddExercise from './AddExercise';
import { ExerciseType } from '../types';

interface PlannerWeek {
  weekNumber: number;
  focus: string;
  notes: string;
  workouts: Record<string, ExerciseType[]>;
}

export default function TrainingPlanner() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { workouts: defaultWorkouts } = useContext(WorkoutContext);
  const { currentWeek } = useContext(WeekContext);
  const [showAddExercise, setShowAddExercise] = useState<{weekNumber: number; day: string} | null>(null);
  
  const [weeks, setWeeks] = useState<PlannerWeek[]>(() => {
    const saved = localStorage.getItem('trainingPlan');
    if (saved) {
      const parsedWeeks = JSON.parse(saved);
      // Ensure each week has proper workout arrays initialized
      return parsedWeeks.map((week: PlannerWeek) => ({
        ...week,
        workouts: Object.keys(defaultWorkouts).reduce((acc, day) => ({
          ...acc,
          [day]: Array.isArray(week.workouts[day]) ? week.workouts[day] : []
        }), {})
      }));
    }
    
    // Initialize new weeks with empty arrays for each day
    return Array.from({ length: 12 }, (_, i) => ({
      weekNumber: currentWeek + i,
      focus: '',
      notes: '',
      workouts: Object.keys(defaultWorkouts).reduce((acc, day) => ({
        ...acc,
        [day]: []
      }), {})
    }));
  });
  
  const [expandedWeek, setExpandedWeek] = useState<number | null>(currentWeek);

  const saveWeeks = (updatedWeeks: PlannerWeek[]) => {
    setWeeks(updatedWeeks);
    localStorage.setItem('trainingPlan', JSON.stringify(updatedWeeks));
  };

  const handleAddExercise = (exercise: ExerciseType) => {
    if (!showAddExercise) return;
    
    const { weekNumber, day } = showAddExercise;
    const updatedWeeks = weeks.map(week => {
      if (week.weekNumber === weekNumber) {
        return {
          ...week,
          workouts: {
            ...week.workouts,
            [day]: [...(week.workouts[day] || []), exercise]
          }
        };
      }
      return week;
    });
    
    saveWeeks(updatedWeeks);
    setShowAddExercise(null);
  };

  const handleRemoveExercise = (weekNumber: number, day: string, index: number) => {
    const updatedWeeks = weeks.map(week => {
      if (week.weekNumber === weekNumber) {
        return {
          ...week,
          workouts: {
            ...week.workouts,
            [day]: (week.workouts[day] || []).filter((_, i) => i !== index)
          }
        };
      }
      return week;
    });
    saveWeeks(updatedWeeks);
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/')}
        className={`flex items-center space-x-2 ${
          darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
        <span>Back to weekly view</span>
      </button>

      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          3-Month Training Plan
        </h2>
        <div className="flex items-center gap-4">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Current Week: {currentWeek}
          </span>
          <Calendar className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        </div>
      </div>

      <div className="space-y-6">
        {weeks.map((week) => (
          <div key={week.weekNumber} className="space-y-4">
            <div
              className={`flex items-center justify-between cursor-pointer p-4 rounded-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              } shadow-sm`}
              onClick={() => setExpandedWeek(expandedWeek === week.weekNumber ? null : week.weekNumber)}
            >
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Week {week.weekNumber}
              </span>
              {expandedWeek === week.weekNumber ? (
                <ChevronUp className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              ) : (
                <ChevronDown className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              )}
            </div>

            {expandedWeek === week.weekNumber && (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(week.workouts).map(([day, exercises]) => {
                  const [weekday, type] = day.split(' - ');
                  const isRestDay = type === 'Rest Day';

                  return (
                    <div
                      key={day}
                      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full transition-all hover:shadow-lg`}
                    >
                      <div className="bg-indigo-600 dark:bg-indigo-700 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Dumbbell className="h-6 w-6 text-white" />
                            <h2 className="text-xl font-bold text-white">
                              {weekday}
                            </h2>
                          </div>
                          {!isRestDay && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowAddExercise({ weekNumber: week.weekNumber, day });
                              }}
                              className="p-1.5 text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                              <Plus className="h-5 w-5" />
                            </button>
                          )}
                        </div>
                        <p className="text-indigo-100 mt-1">{type}</p>
                      </div>
                      <div className="p-6">
                        {isRestDay ? (
                          <p className="text-gray-600 dark:text-gray-400">Rest Day</p>
                        ) : exercises && exercises.length > 0 ? (
                          <div className="space-y-6">
                            {exercises.map((exercise, index) => (
                              <div key={index} className="relative group">
                                <button
                                  onClick={() => handleRemoveExercise(week.weekNumber, day, index)}
                                  className="absolute top-[1.125rem] right-16 p-1.5 sm:p-2 text-red-400 hover:bg-gray-700 rounded-full z-10 transition-colors opacity-0 group-hover:opacity-100"
                                  title="Remove exercise"
                                >
                                  <Edit2 className="h-5 w-5" />
                                </button>
                                <Exercise {...exercise} />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            0 exercises
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {showAddExercise && (
        <AddExercise
          onAdd={handleAddExercise}
          onClose={() => setShowAddExercise(null)}
          day={showAddExercise.day}
        />
      )}
    </div>
  );
}