import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { ExerciseType } from '../types';
import '../styles/AddExercise.css';
import { exerciseLibrary } from '../data/exerciseLibrary';

interface AddExerciseProps {
  onAdd: (exercise: ExerciseType) => void;
  onClose: () => void;
  day?: string;
}

export default function AddExercise({ onAdd, onClose, day }: AddExerciseProps) {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [exercise, setExercise] = useState<ExerciseType>({
    name: '',
    sets: [
      { reps: 0, weight: 0 },
      { reps: 0, weight: 0 },
      { reps: 0, weight: 0 }
    ],
    image: '',
    description: ''
  });

  // Get all muscle groups from the day string (e.g., "Monday - Legs & Calves" -> ["legs", "calves"])
  const muscleGroups = day?.toLowerCase().split(' - ')[1].split(' & ') || [];
  
  // Get exercises for all selected muscle groups
  const exercises = muscleGroups.reduce((acc: ExerciseType[], group: string) => {
    const groupExercises = exerciseLibrary[group as keyof typeof exerciseLibrary] || [];
    return [...acc, ...groupExercises];
  }, []);

  const handleExerciseSelect = (selectedExercise: Partial<ExerciseType>) => {
    const newExercise = {
      ...selectedExercise,
      sets: [
        { reps: 0, weight: 0 },
        { reps: 0, weight: 0 },
        { reps: 0, weight: 0 }
      ]
    } as ExerciseType;
    
    onAdd(newExercise);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(exercise);
    onClose();
  };

  return (
    <div className="add-exercise-overlay">
      <div className="add-exercise-modal">
        <div className="add-exercise-header">
          <h3 className="add-exercise-title">Add New Exercise</h3>
          <button onClick={onClose} className="add-exercise-close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {exercises.length > 0 && !showCustomForm ? (
          <div className="add-exercise-list">
            {exercises.map((ex, index) => (
              <div
                key={index}
                className="add-exercise-item"
                onClick={() => handleExerciseSelect(ex)}
              >
                <div className="add-exercise-item-content">
                  <h4 className="add-exercise-item-title">{ex.name}</h4>
                  {ex.image && (
                    <img 
                      src={ex.image} 
                      alt={ex.name} 
                      className="add-exercise-item-image"
                      loading="lazy"
                    />
                  )}
                  <p className="add-exercise-item-description">{ex.description}</p>
                </div>
              </div>
            ))}
            <button
              onClick={() => setShowCustomForm(true)}
              className="add-exercise-custom-btn"
            >
              <Plus className="h-5 w-5" />
              <span>Add Custom Exercise</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="add-exercise-form">
            <div className="add-exercise-field">
              <label className="add-exercise-label">Exercise Name *</label>
              <input
                type="text"
                required
                value={exercise.name}
                onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
                className="add-exercise-input"
                placeholder="e.g., Bench Press"
              />
            </div>

            <div className="add-exercise-field">
              <label className="add-exercise-label">Image URL</label>
              <input
                type="url"
                value={exercise.image || ''}
                onChange={(e) => setExercise({ ...exercise, image: e.target.value })}
                className="add-exercise-input"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="add-exercise-field">
              <label className="add-exercise-label">Description</label>
              <textarea
                value={exercise.description || ''}
                onChange={(e) => setExercise({ ...exercise, description: e.target.value })}
                className="add-exercise-textarea"
                placeholder="Describe the exercise..."
              />
            </div>

            <div className="add-exercise-actions">
              {exercises.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowCustomForm(false)}
                  className="add-exercise-cancel"
                >
                  Back to Presets
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="add-exercise-cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="add-exercise-submit"
              >
                <Plus className="h-4 w-4" />
                <span>Add Exercise</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}