import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { ReadAloudButton } from '../components/ReadAloudButton';
import { useQuiz } from '../hooks/useQuiz';
import { courses } from '../data/courses';

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { t, currentLanguage } = useLanguage();
  const [showQuiz, setShowQuiz] = useState(false);

  const course = courses.find(c => c.id === courseId);

  // Create a default quiz structure if course is not found
  const defaultQuiz = {
    id: 'default',
    courseId: courseId || 'default',
    questions: [],
  };

  const {
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
  } = useQuiz(course?.quiz || defaultQuiz);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Get content in current language
  const courseTitle = course.title[currentLanguage.code];
  const courseContent = course.content[currentLanguage.code];

  if (showQuiz && !isCompleted) {
    return (
      <main id="main-content" className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {t('quiz.title')}: {courseTitle}
                </h1>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
                  aria-label="Close quiz"
                >
                  <span className="text-xl" aria-hidden="true">
                    ✕
                  </span>
                </button>
              </div>
              <div className="text-sm text-gray-600">
                {t('quiz.question')} {currentQuestionIndex + 1} {t('quiz.of')}{' '}
                {course.quiz.questions.length}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {currentQuestion?.question?.[currentLanguage.code]}
              </h2>

              <div className="space-y-3">
                {currentQuestion?.options?.[currentLanguage.code]?.map(
                  (option, index) => (
                    <label
                      key={index}
                      className={`block p-4 rounded-lg border cursor-pointer transition-colors duration-200
                               ${
                                 answers[currentQuestionIndex] === index
                                   ? 'border-blue-500 bg-blue-50'
                                   : 'border-gray-300 hover:border-gray-400'
                               }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={index}
                        checked={answers[currentQuestionIndex] === index}
                        onChange={() => selectAnswer(index)}
                        className="sr-only"
                        aria-describedby={`option-${index}-description`}
                      />
                      <span
                        id={`option-${index}-description`}
                        className="text-gray-900 font-medium"
                      >
                        {option}
                      </span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setShowQuiz(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                {t('course.back')}
              </button>

              <button
                onClick={nextQuestion}
                disabled={!hasAnswered}
                className="px-6 py-2 bg-blue-600 text-white rounded-md 
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors duration-200"
              >
                {isLastQuestion ? t('quiz.finish') : t('quiz.next')}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (showQuiz && isCompleted && results) {
    return (
      <main id="main-content" className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {t('quiz.results')}
            </h1>

            <div className="mb-8">
              <div className="text-6xl mb-4">
                {results.score === results.totalQuestions
                  ? '🎉'
                  : results.score >= results.totalQuestions / 2
                    ? '👏'
                    : '💪'}
              </div>
              <p className="text-2xl font-semibold text-gray-900 mb-2">
                {t('quiz.score')}: {results.score}/{results.totalQuestions}
              </p>
              <p className="text-lg text-gray-600">
                {results.score} {t('quiz.correct')} out of{' '}
                {results.totalQuestions} questions
              </p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              {course.quiz.questions.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">
                    {question.question[currentLanguage.code]}
                  </h3>
                  <p
                    className={`mb-2 ${results.answers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}
                  >
                    Your answer:{' '}
                    {
                      question.options[currentLanguage.code][
                        results.answers[index]
                      ]
                    }
                    {results.answers[index] === question.correctAnswer
                      ? ' ✓'
                      : ' ✗'}
                  </p>
                  {results.answers[index] !== question.correctAnswer && (
                    <p className="text-green-600 mb-2">
                      Correct answer:{' '}
                      {
                        question.options[currentLanguage.code][
                          question.correctAnswer
                        ]
                      }{' '}
                      ✓
                    </p>
                  )}
                  {question.explanation && (
                    <p className="text-gray-600 text-sm">
                      <strong>{t('quiz.explanation')}:</strong>{' '}
                      {question.explanation[currentLanguage.code]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="px-6 py-2 bg-blue-600 text-white rounded-md 
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t('quiz.tryAgain')}
              </button>
              <Link
                to="/courses"
                className="px-6 py-2 bg-gray-600 text-white rounded-md 
                           hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                {t('course.back')}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
            >
              <span className="mr-2" aria-hidden="true">
                ←
              </span>
              {t('course.back')}
            </Link>

            <ReadAloudButton text={courseContent} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {courseTitle}
          </h1>

          <div className="flex items-center space-x-6 mb-8 text-sm text-gray-600">
            <span className="flex items-center">
              <span className="mr-1" aria-hidden="true">
                📊
              </span>
              {t('courses.difficulty')}: {course.difficulty}
            </span>
            <span className="flex items-center">
              <span className="mr-1" aria-hidden="true">
                ⏱️
              </span>
              {course.estimatedTime}
            </span>
          </div>

          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: courseContent }}
          />

          <div className="flex justify-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg 
                         hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                         transition-colors duration-200"
            >
              {t('course.takeQuiz')}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
