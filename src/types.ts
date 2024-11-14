export interface SetType {
  reps: number;
  weight: number;
}

export interface ExerciseType {
  name: string;
  sets: SetType[];
  image?: string;
  video?: string;
  description?: string;
}