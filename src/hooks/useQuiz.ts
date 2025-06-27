import { useState, useCallback } from 'react';
import type { Quiz, QuizResult } from '../types';

export function useQuiz(quiz: Quiz) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<QuizResult | null>(null);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const hasAnswered = answers[currentQuestionIndex] !== undefined;

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setAnswers(newAnswers);
    },
    [answers, currentQuestionIndex],
  );

  const nextQuestion = useCallback(() => {
    if (isLastQuestion) {
      // Calculate results
      const correctAnswers = answers.reduce((count, answer, index) => {
        return answer === quiz.questions[index].correctAnswer
          ? count + 1
          : count;
      }, 0);

      const result: QuizResult = {
        courseId: quiz.courseId,
        score: correctAnswers,
        totalQuestions: quiz.questions.length,
        answers,
        completedAt: new Date(),
      };

      setResults(result);
      setIsCompleted(true);

      // Save to localStorage
      const savedResults = JSON.parse(
        localStorage.getItem('mlearn-quiz-results') || '[]',
      );
      savedResults.push(result);
      localStorage.setItem('mlearn-quiz-results', JSON.stringify(savedResults));
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [isLastQuestion, answers, quiz]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsCompleted(false);
    setResults(null);
  }, []);

  return {
    currentQuestion,
    currentQuestionIndex,
    isLastQuestion,
    hasAnswered,
    answers,
    isCompleted,
    results,
    selectAnswer,
    nextQuestion,
    resetQuiz,
  };
}
