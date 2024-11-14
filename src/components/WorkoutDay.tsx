import React from 'react';
import Exercise from './Exercise';
import { ExerciseType } from '../types';

interface WorkoutDayProps {
  day: string;
  exercises: ExerciseType[];
}

export default function WorkoutDay({ day, exercises }: WorkoutDayProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-fit">
      <div className="bg-indigo-600 px-4 sm:px-6 py-3 sm:py-4">
        <h2 className="text-lg sm:text-xl font-bold text-white">{day}</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {exercises.map((exercise, index) => (
          <Exercise key={`${day}-${index}`} {...exercise} />
        ))}
      </div>
    </div>
  );
}