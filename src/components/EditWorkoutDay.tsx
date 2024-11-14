import React, { useState, useContext } from 'react';
import { X } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

interface EditWorkoutDayProps {
  day: string;
  onSave: (oldDay: string, newDay: string, newType: string) => void;
  onClose: () => void;
}

const muscleGroups = [
  'Chest',
  'Back',
  'Legs',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Core',
  'Abs',
  'Calves',
  'Glutes',
  'Cardio',
  'Rest Day'
];

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export default function EditWorkoutDay({ day, onSave, onClose }: EditWorkoutDayProps) {
  const { darkMode } = useContext(ThemeContext);
  const [currentDay, currentType] = day.split(' - ');
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>(
    currentType === 'Rest Day' ? ['Rest Day'] : currentType.split(' & ')
  );

  const toggleMuscleGroup = (muscle: string) => {
    if (muscle === 'Rest Day') {
      setSelectedMuscles(['Rest Day']);
      return;
    }

    setSelectedMuscles(prev => {
      // Remove Rest Day if it's selected
      const filtered = prev.filter(m => m !== 'Rest Day');
      
      if (filtered.includes(muscle)) {
        return filtered.filter(m => m !== muscle);
      } else {
        return [...filtered, muscle];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMuscles.length === 0) return;

    const newType = selectedMuscles.join(' & ');
    const newDay = `${selectedDay} - ${newType}`;
    onSave(day, newDay, newType);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg w-full max-w-md`}>
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Edit Workout Day
          </h3>
          <button
            onClick={onClose}
            className={`p-1 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } rounded-full transition-colors`}
          >
            <X className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-1 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Weekday
            </label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className={`w-full px-3 py-2 rounded-md border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              {weekdays.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Muscle Groups
            </label>
            <div className="flex flex-wrap gap-2">
              {muscleGroups.map(muscle => (
                <button
                  key={muscle}
                  type="button"
                  onClick={() => toggleMuscleGroup(muscle)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
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
            {selectedMuscles.length === 0 && (
              <p className="mt-2 text-sm text-red-500">
                Please select at least one muscle group
              </p>
            )}
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-md ${
                darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={selectedMuscles.length === 0}
              className={`px-4 py-2 rounded-md text-white ${
                selectedMuscles.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : darkMode
                  ? 'bg-indigo-500 hover:bg-indigo-600'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}