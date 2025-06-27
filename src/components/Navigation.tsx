import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageToggle } from './LanguageToggle';

export function Navigation() {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="bg-white shadow-sm border-b"
      role="navigation"
      aria-label={t('a11y.menu')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
              aria-label="mLearn - Go to homepage"
            >
              mLearn
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         ${
                           isActive('/')
                             ? 'bg-blue-100 text-blue-700'
                             : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                         }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/courses"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         ${
                           isActive('/courses')
                             ? 'bg-blue-100 text-blue-700'
                             : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                         }`}
              aria-current={isActive('/courses') ? 'page' : undefined}
            >
              {t('nav.courses')}
            </Link>
          </div>

          {/* Language toggle */}
          <div className="flex items-center">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         ${
                           isActive('/')
                             ? 'bg-blue-100 text-blue-700'
                             : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                         }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/courses"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         ${
                           isActive('/courses')
                             ? 'bg-blue-100 text-blue-700'
                             : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                         }`}
              aria-current={isActive('/courses') ? 'page' : undefined}
            >
              {t('nav.courses')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
