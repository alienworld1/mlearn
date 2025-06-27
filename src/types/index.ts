// TypeScript interfaces for the learning platform

export interface Course {
  id: string;
  title: Record<'en' | 'es', string>;
  description: Record<'en' | 'es', string>;
  content: Record<'en' | 'es', string>;
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
  question: Record<'en' | 'es', string>;
  options: Record<'en' | 'es', string[]>;
  correctAnswer: number; // Index of correct option
  explanation?: Record<'en' | 'es', string>;
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
