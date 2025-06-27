import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { courses } from '../data/courses';

export function CourseListPage() {
  const { t, currentLanguage } = useLanguage();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('courses.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed courses to start your learning
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <article
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              aria-labelledby={`course-title-${course.id}`}
              aria-describedby={`course-description-${course.id}`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}
                  >
                    {course.difficulty}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <span className="mr-1" aria-hidden="true">
                      ⏱️
                    </span>
                    {course.estimatedTime}
                  </span>
                </div>

                <h2
                  id={`course-title-${course.id}`}
                  className="text-xl font-semibold text-gray-900 mb-3"
                >
                  {course.title[currentLanguage.code]}
                </h2>

                <p
                  id={`course-description-${course.id}`}
                  className="text-gray-600 mb-6 line-clamp-3"
                >
                  {course.description[currentLanguage.code]}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="mr-4">
                      <span className="font-medium">
                        {t('courses.difficulty')}:
                      </span>{' '}
                      {course.difficulty}
                    </span>
                    <span>
                      <span className="font-medium">{t('courses.time')}:</span>{' '}
                      {course.estimatedTime}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 
                           bg-blue-600 text-white text-sm font-medium rounded-md 
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           transition-colors duration-200"
                  aria-label={`Start ${course.title[currentLanguage.code]} course`}
                >
                  {t('courses.start')}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No courses available at the moment. Please check back later.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
