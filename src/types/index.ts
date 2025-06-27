// TypeScript interfaces for the learning platform

export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  quiz: Quiz;
}

export interface Quiz {
  id: string;
  courseId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation?: string;
}

export interface QuizResult {
  courseId: string;
  score: number;
  totalQuestions: number;
  answers: number[];
  completedAt: Date;
}

export interface Translation {
  [key: string]: string;
}

export interface Language {
  code: 'en' | 'es';
  name: string;
  translations: Translation;
}
