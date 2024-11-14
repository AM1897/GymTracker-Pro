import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Plus, Trash2 } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { WorkoutContext } from '../context/WorkoutContext';
import { ExerciseType } from '../types';
import Exercise from './Exercise';
import AddExercise from './AddExercise';
import { Container, Grid, Flex } from './Layout';

export default function DayExercises() {
  const { day } = useParams<{ day: string }>();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { workouts, updateWorkout } = useContext(WorkoutContext);
  const [showAddExercise, setShowAddExercise] = useState(false);

  if (!day || !workouts[decodeURIComponent(day)]) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Workout day not found
          </p>
          <button
            onClick={() => navigate('/')}
            className={`flex items-center space-x-2 ${
              darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back to overview</span>
          </button>
        </div>
      </Container>
    );
  }

  const decodedDay = decodeURIComponent(day);
  const exercises = workouts[decodedDay];

  const handleAddExercise = (exercise: ExerciseType) => {
    updateWorkout(decodedDay, [...exercises, exercise]);
  };

  const handleRemoveExercise = (index: number) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    updateWorkout(decodedDay, updatedExercises);
  };

  return (
    <Container>
      <button
        onClick={() => navigate('/')}
        className={`flex items-center space-x-2 ${
          darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
        } mb-6`}
      >
        <ChevronLeft className="h-5 w-5" />
        <span>Back to overview</span>
      </button>
      
      <Flex className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {decodedDay}
        </h1>
        <button
          onClick={() => setShowAddExercise(true)}
          className={`flex items-center space-x-2 px-4 py-2 ${
            darkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white rounded-lg transition-colors`}
        >
          <Plus className="h-5 w-5" />
          <span>Add exercise</span>
        </button>
      </Flex>
      
      <Grid>
        {exercises.map((exercise, index) => (
          <div key={`${decodedDay}-${index}`} className="relative group">
            <button
              onClick={() => handleRemoveExercise(index)}
              className={`absolute top-[1.125rem] right-16 p-1.5 sm:p-2 ${
                darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-red-50'
              } rounded-full z-10 transition-colors opacity-0 group-hover:opacity-100`}
              title="Remove exercise"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <Exercise {...exercise} />
          </div>
        ))}
      </Grid>

      {showAddExercise && (
        <AddExercise
          onAdd={handleAddExercise}
          onClose={() => setShowAddExercise(false)}
          day={decodedDay}
        />
      )}
    </Container>
  );
}