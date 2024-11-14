import React, { useState, useContext } from 'react';
import { Plus, Minus, Play, Info, Check } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { SetType } from '../types';
import '../styles/Exercise.css';

interface ExerciseProps {
  name: string;
  sets?: SetType[];
  image?: string;
  video?: string;
  description?: string;
}

export default function Exercise({ name, sets: initialSets, image, video, description }: ExerciseProps) {
  const { darkMode } = useContext(ThemeContext);
  const defaultSets = [
    { reps: 0, weight: 0 },
    { reps: 0, weight: 0 },
    { reps: 0, weight: 0 }
  ];

  const [sets, setSets] = useState<SetType[]>(initialSets || defaultSets);
  const [completedSets, setCompletedSets] = useState<boolean[]>(new Array(sets.length).fill(false));
  const [showGuide, setShowGuide] = useState(false);

  const updateSet = (index: number, field: keyof SetType, value: number) => {
    const newSets = sets.map((set, i) => 
      i === index ? { ...set, [field]: value } : set
    );
    setSets(newSets);
  };

  const addSet = () => {
    const lastSet = sets[sets.length - 1];
    setSets([...sets, { ...lastSet }]);
    setCompletedSets([...completedSets, false]);
  };

  const removeSet = (index: number) => {
    setSets(sets.filter((_, i) => i !== index));
    setCompletedSets(completedSets.filter((_, i) => i !== index));
  };

  const toggleSetCompletion = (index: number) => {
    setCompletedSets(prev => prev.map((completed, i) => 
      i === index ? !completed : completed
    ));
  };

  return (
    <div className={`exercise-card ${!darkMode ? 'light-mode' : ''}`}>
      <div className="exercise-header">
        <div className="exercise-title">
          <h3 className="exercise-name">{name}</h3>
          <div className="exercise-actions">
            {video && (
              <button
                onClick={() => window.open(video, '_blank')}
                className="exercise-action-button"
                title="Watch exercise video"
              >
                <Play className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="exercise-action-button"
              title="Show exercise guide"
            >
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>

        {showGuide && (
          <div className="exercise-guide">
            {image && (
              <img 
                src={image} 
                alt={name} 
                className="exercise-image"
                loading="lazy"
              />
            )}
            {description && (
              <p className="exercise-description">{description}</p>
            )}
          </div>
        )}

        <div className="exercise-sets-container">
          <div className="exercise-sets-header">
            <div className="exercise-set-label">Set</div>
            <div className="exercise-set-label">Reps</div>
            <div className="exercise-set-label">Weight</div>
          </div>

          <div className="exercise-sets">
            {sets.map((set, index) => (
              <div key={index} className={`exercise-set ${completedSets[index] ? 'completed' : ''}`}>
                <button
                  onClick={() => toggleSetCompletion(index)}
                  className={`exercise-set-checkbox ${completedSets[index] ? 'completed' : ''}`}
                  title={completedSets[index] ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {completedSets[index] && <Check className="h-3 w-3" />}
                </button>
                <div className="exercise-set-number">{index + 1}</div>
                <input
                  type="number"
                  value={set.reps}
                  onChange={(e) => updateSet(index, 'reps', parseInt(e.target.value) || 0)}
                  className="exercise-input"
                  min="0"
                />
                <input
                  type="number"
                  value={set.weight}
                  onChange={(e) => updateSet(index, 'weight', parseFloat(e.target.value) || 0)}
                  className="exercise-weight-input"
                  min="0"
                  step="0.5"
                />
                <button
                  onClick={() => removeSet(index)}
                  className="exercise-remove-set"
                  title="Remove set"
                >
                  <Minus className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addSet}
            className="exercise-add-set"
          >
            <Plus className="h-5 w-5" />
            <span>Add Set</span>
          </button>
        </div>
      </div>
    </div>
  );
}