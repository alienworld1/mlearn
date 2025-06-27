import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

export function HomePage() {
  const { t } = useLanguage();

  return (
    <main
      id="main-content"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('home.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>

            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white 
                         text-lg font-semibold rounded-lg hover:bg-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {t('home.cta')}
              <span className="ml-2 text-xl" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  📱
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('home.features.offline')}
              </h3>
              <p className="text-gray-600">
                Access your courses anytime, even without internet connection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  ♿
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('home.features.accessible')}
              </h3>
              <p className="text-gray-600">
                Built with screen readers and keyboard navigation in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  🌍
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('home.features.multilingual')}
              </h3>
              <p className="text-gray-600">
                Learn in English or Spanish with easy language switching.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  💰
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('home.features.free')}
              </h3>
              <p className="text-gray-600">
                All courses and features are completely free to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to start your learning journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners improving their skills with our
            accessible platform.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 
                       text-lg font-semibold rounded-lg hover:bg-gray-50 
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600
                       transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {t('courses.title')}
            <span className="ml-2 text-xl" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
