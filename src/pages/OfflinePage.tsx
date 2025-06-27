import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

export function OfflinePage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-6xl mb-6" aria-hidden="true">
            📡
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('offline.title')}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {t('offline.description')}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span
                className="w-2 h-2 bg-red-500 rounded-full"
                aria-hidden="true"
              />
              <span>{t('status.offline')}</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
              <span aria-hidden="true">💾</span>
              <span>{t('offline.cached')}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/courses"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              {t('offline.viewCourses')}
            </Link>

            <div className="text-center">
              <button
                onClick={() => window.location.reload()}
                className="text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
              >
                {t('offline.retry')}
              </button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              {t('offline.tips.title')}
            </h2>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>• {t('offline.tips.courses')}</li>
              <li>• {t('offline.tips.quiz')}</li>
              <li>• {t('offline.tips.install')}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
