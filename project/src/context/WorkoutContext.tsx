import React, { createContext, useState, useEffect } from 'react';
import { ExerciseType } from '../types';
import { workoutData as defaultWorkouts } from '../data/workouts';

interface WorkoutContextType {
  workouts: Record<string, ExerciseType[]>;
  updateWorkout: (day: string, exercises: ExerciseType[]) => void;
  resetWorkout: (day: string) => void;
  updateWorkoutDay: (oldDay: string, newDay: string, newType: string) => void;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  workouts: defaultWorkouts,
  updateWorkout: () => {},
  resetWorkout: () => {},
  updateWorkoutDay: () => {},
});

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [workouts, setWorkouts] = useState<Record<string, ExerciseType[]>>(() => {
    const saved = localStorage.getItem('workouts');
    return saved ? JSON.parse(saved) : defaultWorkouts;
  });

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const updateWorkout = (day: string, exercises: ExerciseType[]) => {
    setWorkouts(prev => ({
      ...prev,
      [day]: exercises
    }));
  };

  const resetWorkout = (day: string) => {
    setWorkouts(prev => ({
      ...prev,
      [day]: defaultWorkouts[day] || []
    }));
  };

  const updateWorkoutDay = (oldDay: string, newDay: string, newType: string) => {
    setWorkouts(prev => {
      const newWorkouts = { ...prev };
      const exercises = newType === 'Rest Day' ? [] : (prev[oldDay] || []);
      delete newWorkouts[oldDay];
      newWorkouts[newDay] = exercises;
      
      const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const sortedWorkouts = Object.entries(newWorkouts)
        .sort(([a], [b]) => {
          const dayA = weekdays.indexOf(a.split(' - ')[0]);
          const dayB = weekdays.indexOf(b.split(' - ')[0]);
          return dayA - dayB;
        })
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

      return sortedWorkouts;
    });
  };

  return (
    <WorkoutContext.Provider value={{ workouts, updateWorkout, resetWorkout, updateWorkoutDay }}>
      {children}
    </WorkoutContext.Provider>
  );
}