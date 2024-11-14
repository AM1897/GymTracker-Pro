import React, { useState, useContext } from 'react';
import { Plus, X } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { WorkoutContext } from '../context/WorkoutContext';
import { ExerciseType } from '../types';
import Exercise from './Exercise';
import AddExercise from './AddExercise';

const muscleGroups = [
  'Chest',
  'Back',
  'Legs',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Core',
  'Full Body',
  'Cardio'
];

export default function CustomWorkout() {
  const { darkMode } = useContext(ThemeContext);
  const { workouts } = useContext(WorkoutContext);
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);
  const [customExercises, setCustomExercises] = useState<ExerciseType[]>([]);
  const [showAddExercise, setShowAddExercise] = useState(false);

  const toggleMuscleGroup = (muscle: string) => {
    setSelectedMuscles(prev =>
      prev.includes(muscle)
        ? prev.filter(m => m !== muscle)
        : [...prev, muscle]
    );
  };

  const addExercise = (exercise: ExerciseType) => {
    setCustomExercises(prev => [...prev, exercise]);
  };

  const removeExercise = (index: number) => {
    setCustomExercises(prev => prev.filter((_, i) => i !== index));
  };

  // Get suggested exercises based on selected muscle groups
  const getSuggestedExercises = () => {
    if (selectedMuscles.length === 0) return [];
    
    return Object.values(workouts)
      .flat()
      .filter((exercise: ExerciseType) => 
        selectedMuscles.some(muscle => 
          exercise.name.toLowerCase().includes(muscle.toLowerCase()) ||
          (exercise.description || '').toLowerCase().includes(muscle.toLowerCase())
        )
      )
      .slice(0, 5);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Select Muscle Groups
        </h2>
        <div className="flex flex-wrap gap-2">
          {muscleGroups.map(muscle => (
            <button
              key={muscle}
              onClick={() => toggleMuscleGroup(muscle)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedMuscles.includes(muscle)
                  ? 'bg-indigo-600 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {muscle}
            </button>
          ))}
        </div>
      </div>

      {selectedMuscles.length > 0 && (
        <div>
          <h3 className={`text-lg font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Suggested Exercises
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {getSuggestedExercises().map((exercise: ExerciseType) => (
              <div
                key={exercise.name}
                onClick={() => addExercise(exercise)}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-gray-50'
                } shadow-sm`}
              >
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {exercise.name}
                </h4>
                {exercise.description && (
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {exercise.description.slice(0, 100)}...
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Custom Workout ({customExercises.length} exercises)
        </h2>
        <button
          onClick={() => setShowAddExercise(true)}
          className={`flex items-center space-x-2 px-4 py-2 ${
            darkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white rounded-lg transition-colors`}
        >
          <Plus className="h-5 w-5" />
          <span>Add Custom Exercise</span>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {customExercises.map((exercise, index) => (
          <div key={`custom-${index}`} className="relative">
            <button
              onClick={() => removeExercise(index)}
              className={`absolute top-4 right-4 p-2 ${
                darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-red-50'
              } rounded-full z-10 transition-colors`}
              title="Remove exercise"
            >
              <X className="h-5 w-5" />
            </button>
            <Exercise {...exercise} />
          </div>
        ))}
      </div>

      {showAddExercise && (
        <AddExercise
          onAdd={addExercise}
          onClose={() => setShowAddExercise(false)}
        />
      )}
    </div>
  );
}