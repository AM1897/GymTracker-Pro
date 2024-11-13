# GymTracker Pro

A modern, responsive workout tracking application built with React and TypeScript. Track your workouts, manage exercises, and plan your training schedule with ease.

![GymTracker Pro](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&h=400&q=80)

## Features

- 🏋️‍♂️ **Weekly Workout Schedule**
  - Organize workouts by day and muscle groups
  - Customizable workout splits
  - Rest day management

- 💪 **Exercise Management**
  - Comprehensive exercise library
  - Custom exercise creation
  - Exercise details with GIF demonstrations
  - Set and rep tracking
  - Weight progression tracking

- 📱 **Responsive Design**
  - Works seamlessly on desktop and mobile devices
  - Dark/Light mode support
  - Clean, modern interface

- 🌍 **Multi-language Support**
  - English and Swedish languages
  - Easy language switching

- 📅 **Training Plan**
  - Create and manage long-term training plans
  - Week-by-week workout scheduling
  - Progress tracking across weeks

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context
- **Routing**: React Router
- **Build Tool**: Vite

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # React components
├── context/           # React context providers
├── data/             # Static data and translations
├── styles/           # CSS styles
├── types/            # TypeScript type definitions
└── App.tsx           # Main application component
```

### Key Components

- `WorkoutDays`: Main schedule view
- `DayExercises`: Individual workout day view
- `Exercise`: Exercise tracking component
- `TrainingPlan`: Long-term planning view
- `AddExercise`: Exercise creation modal
- `CustomWorkout`: Custom workout builder

### Context Providers

- `WorkoutContext`: Manages workout data
- `ThemeContext`: Handles dark/light mode
- `LanguageContext`: Manages translations
- `WeekContext`: Tracks training weeks

## Features in Detail

### Exercise Tracking
- Track sets, reps, and weights
- Mark sets as completed
- View exercise demonstrations
- Add notes and descriptions

### Workout Planning
- Customize weekly schedule
- Create multiple training plans
- Track progress across weeks
- Add/remove exercises flexibly

### User Interface
- Intuitive navigation
- Responsive design
- Smooth animations
- Accessible controls

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React and TypeScript
