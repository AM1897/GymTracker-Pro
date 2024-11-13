import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Edit, Calendar, Plus } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { WorkoutContext } from '../context/WorkoutContext';
import EditWorkoutDay from './EditWorkoutDay';
import { Container, Grid, Card, CardHeader, CardBody, Flex } from './Layout';

export default function WorkoutDays() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { workouts, updateWorkoutDay } = useContext(WorkoutContext);
  const [editingDay, setEditingDay] = useState<string | null>(null);
  const [showPlannerModal, setShowPlannerModal] = useState(false);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const handleEditDay = (day: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingDay(day);
  };

  const handleAddToPlanner = () => {
    const existingPlan = localStorage.getItem('trainingPlan');
    const plan = existingPlan ? JSON.parse(existingPlan) : [];
    
    plan.push({
      weekNumber: plan.length + 1,
      workouts: { ...workouts }
    });
    
    localStorage.setItem('trainingPlan', JSON.stringify(plan));
    setShowPlannerModal(true);
  };

  return (
    <Container>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Weekly Schedule
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => navigate('/plan')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
            } text-gray-700 dark:text-gray-200 rounded-lg transition-colors text-sm sm:text-base`}
          >
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>View Plan</span>
          </button>
          <button
            onClick={handleAddToPlanner}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 ${
              darkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white rounded-lg transition-colors text-sm sm:text-base`}
          >
            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Add to Plan</span>
          </button>
        </div>
      </div>

      <Grid>
        {Object.entries(workouts).map(([day, exercises]) => {
          const [weekday] = day.split(' - ');
          const isToday = weekday.toLowerCase() === today.toLowerCase();
          const isRestDay = day.includes('Rest Day');

          return (
            <Card key={day}>
              <div
                onClick={() => !isRestDay && navigate(`/day/${encodeURIComponent(day)}`)}
                className="cursor-pointer"
              >
                <CardHeader>
                  <Flex>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Dumbbell className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        {weekday}
                        {isToday && (
                          <span className="ml-2 text-xs sm:text-sm font-normal bg-green-500 text-white px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </h2>
                    </div>
                    <button
                      onClick={(e) => handleEditDay(day, e)}
                      className="p-1.5 text-white hover:bg-white/10 rounded-full transition-colors"
                      title="Edit workout day"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                  </Flex>
                  <p className="text-sm sm:text-base text-indigo-100 mt-1">
                    {day.split(' - ')[1]}
                  </p>
                </CardHeader>
                <CardBody>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {isRestDay ? 'Rest Day' : `${exercises.length} exercises`}
                  </p>
                </CardBody>
              </div>
            </Card>
          );
        })}
      </Grid>

      {showPlannerModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 max-w-md w-full mx-4`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Schedule Added to Training Plan
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Your current weekly schedule has been added to your training plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => {
                  setShowPlannerModal(false);
                  navigate('/plan');
                }}
                className={`px-4 py-2 ${
                  darkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white rounded-lg transition-colors`}
              >
                View Plan
              </button>
              <button
                onClick={() => setShowPlannerModal(false)}
                className={`px-4 py-2 ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                } text-gray-700 dark:text-gray-200 rounded-lg transition-colors`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {editingDay && (
        <EditWorkoutDay
          day={editingDay}
          onSave={updateWorkoutDay}
          onClose={() => setEditingDay(null)}
        />
      )}
    </Container>
  );
}