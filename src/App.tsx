import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { Navigation } from './components/Navigation';
import { SkipLink } from './components/SkipLink';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { HomePage } from './pages/HomePage';
import { CourseListPage } from './pages/CourseListPage';
import { CourseDetailPage } from './pages/CourseDetailPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <SkipLink />
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseListPage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
          </Routes>
          <PWAInstallPrompt />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
