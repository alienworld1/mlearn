import type { Language } from '../types';

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    translations: {
      // Navigation
      'nav.home': 'Home',
      'nav.courses': 'Courses',
      'nav.about': 'About',
      
      // Homepage
      'home.title': 'Welcome to mLearn',
      'home.subtitle': 'Accessible Learning for Everyone',
      'home.description': 'Free, interactive courses designed for low-resource environments and users with disabilities. Learn at your own pace with offline support and multilingual content.',
      'home.cta': 'Start Learning',
      'home.features.offline': 'Works Offline',
      'home.features.accessible': 'Screen Reader Compatible',
      'home.features.multilingual': 'Multiple Languages',
      'home.features.free': 'Completely Free',
      
      // Course List
      'courses.title': 'Available Courses',
      'courses.difficulty': 'Difficulty',
      'courses.time': 'Estimated Time',
      'courses.start': 'Start Course',
      
      // Course Detail
      'course.takeQuiz': 'Take Quiz',
      'course.readAloud': 'Read Aloud',
      'course.back': 'Back to Courses',
      
      // Quiz
      'quiz.title': 'Quiz',
      'quiz.question': 'Question',
      'quiz.of': 'of',
      'quiz.next': 'Next',
      'quiz.finish': 'Finish Quiz',
      'quiz.results': 'Quiz Results',
      'quiz.score': 'Your Score',
      'quiz.correct': 'Correct',
      'quiz.tryAgain': 'Try Again',
      'quiz.explanation': 'Explanation',
      
      // Accessibility
      'a11y.skipToContent': 'Skip to main content',
      'a11y.menu': 'Main navigation menu',
      'a11y.languageToggle': 'Change language',
      'a11y.readAloud': 'Read this content aloud',
      'a11y.courseCard': 'Course card',
      'a11y.quizOption': 'Quiz option',
      
      // General
      'loading': 'Loading...',
      'error': 'An error occurred',
      'retry': 'Try Again'
    }
  },
  {
    code: 'es',
    name: 'Español',
    translations: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.courses': 'Cursos',
      'nav.about': 'Acerca de',
      
      // Homepage
      'home.title': 'Bienvenido a mLearn',
      'home.subtitle': 'Aprendizaje Accesible para Todos',
      'home.description': 'Cursos gratuitos e interactivos diseñados para entornos de bajos recursos y usuarios con discapacidades. Aprende a tu ritmo con soporte sin conexión y contenido multilingüe.',
      'home.cta': 'Comenzar a Aprender',
      'home.features.offline': 'Funciona Sin Conexión',
      'home.features.accessible': 'Compatible con Lectores de Pantalla',
      'home.features.multilingual': 'Múltiples Idiomas',
      'home.features.free': 'Completamente Gratuito',
      
      // Course List
      'courses.title': 'Cursos Disponibles',
      'courses.difficulty': 'Dificultad',
      'courses.time': 'Tiempo Estimado',
      'courses.start': 'Comenzar Curso',
      
      // Course Detail
      'course.takeQuiz': 'Tomar Examen',
      'course.readAloud': 'Leer en Voz Alta',
      'course.back': 'Volver a Cursos',
      
      // Quiz
      'quiz.title': 'Examen',
      'quiz.question': 'Pregunta',
      'quiz.of': 'de',
      'quiz.next': 'Siguiente',
      'quiz.finish': 'Finalizar Examen',
      'quiz.results': 'Resultados del Examen',
      'quiz.score': 'Tu Puntuación',
      'quiz.correct': 'Correcto',
      'quiz.tryAgain': 'Intentar de Nuevo',
      'quiz.explanation': 'Explicación',
      
      // Accessibility
      'a11y.skipToContent': 'Saltar al contenido principal',
      'a11y.menu': 'Menú de navegación principal',
      'a11y.languageToggle': 'Cambiar idioma',
      'a11y.readAloud': 'Leer este contenido en voz alta',
      'a11y.courseCard': 'Tarjeta de curso',
      'a11y.quizOption': 'Opción de examen',
      
      // General
      'loading': 'Cargando...',
      'error': 'Ocurrió un error',
      'retry': 'Intentar de Nuevo'
    }
  }
];
