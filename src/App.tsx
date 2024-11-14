import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { WorkoutProvider } from './context/WorkoutContext';
import { WeekProvider } from './context/WeekContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import WorkoutDays from './components/WorkoutDays';
import DayExercises from './components/DayExercises';
import CustomWorkout from './components/CustomWorkout';
import TrainingPlan from './components/TrainingPlan';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <WeekProvider>
          <WorkoutProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <Navbar />
              <main className="container mx-auto px-4 py-4 sm:py-6 lg:py-8 max-w-7xl">
                <Routes>
                  <Route path="/" element={<WorkoutDays />} />
                  <Route path="/day/:day" element={<DayExercises />} />
                  <Route path="/custom" element={<CustomWorkout />} />
                  <Route path="/plan" element={<TrainingPlan />} />
                </Routes>
              </main>
            </div>
          </WorkoutProvider>
        </WeekProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}