# mLearn - Accessible Learning Platform

An accessible, multilingual learning platform designed for underserved communities.

## 🌟 Features

- **📚 Interactive Courses**: Sample courses in Basic Math and English Vocabulary
- **🌍 Multilingual Support**: Toggle between English and Spanish
- **♿ Accessibility First**: WCAG 2.1 compliant with screen reader support
- **🔊 Text-to-Speech**: Built-in audio narration using Web Speech API
- **📱 Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **⌨️ Keyboard Navigation**: Full keyboard accessibility
- **📊 Quiz System**: Interactive quizzes with immediate feedback
- **💾 Local Storage**: Progress saved locally for offline access

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/alienworld1/mlearn.git
cd mlearn

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🏗️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 7
- **Text-to-Speech**: Web Speech API
- **Language Support**: JSON-based translations
- **Type Safety**: TypeScript with strict mode

## 🎯 Accessibility Features

### Screen Reader Support

- Semantic HTML structure
- ARIA labels and descriptions
- Skip navigation links
- Proper heading hierarchy

### Keyboard Navigation

- Tab-accessible interface
- Focus management
- Keyboard shortcuts
- Clear focus indicators

### Visual Accessibility

- High contrast text
- Scalable typography
- Responsive layout
- Color-blind friendly design

### Assistive Technology

- Text-to-speech narration
- Screen reader compatibility
- Keyboard-only navigation
- Reduced motion support

## 🌍 Multilingual Support

The platform supports English and Spanish with:

- Dynamic language switching
- Persistent language preference
- Accessible language toggle
- RTL-ready structure (for future expansion)

## 🧠 Course System

### Course Structure

Each course includes:

- Title and description
- Rich content with HTML formatting
- Difficulty level indicator
- Estimated completion time
- Interactive quiz component

### Quiz Features

- Multiple choice questions
- Immediate feedback
- Score tracking
- Local storage persistence
- Detailed explanations

## 🔧 Development

### Adding New Courses

1. Update `src/data/courses.ts`:

```typescript
export const courses: Course[] = [
  // Add your new course object
  {
    id: 'new-course',
    title: 'New Course Title',
    description: 'Course description',
    content: 'HTML course content',
    difficulty: 'beginner',
    estimatedTime: '30 minutes',
    quiz: {
      // Quiz definition
    },
  },
];
```

2. Update translations in `src/data/translations.ts` for both languages.

### Adding New Languages

1. Add language definition to `src/data/translations.ts`
2. Update the language type in `src/types/index.ts`
3. Add language option to `LanguageToggle.tsx`

### Customizing Styles

The project uses Tailwind CSS. Modify `src/index.css` for global styles or use Tailwind classes directly in components.

## 🏆 Social Impact

### Problem Addressed

- Limited access to quality education in underserved communities
- Lack of accessible learning platforms for users with disabilities
- Language barriers in educational content
- Unreliable internet connectivity in low-resource areas

### Solution Benefits

- **Free Access**: Completely free platform removes financial barriers
- **Offline Capability**: PWA features enable learning without internet
- **Inclusive Design**: Accessible to users with visual, auditory, and motor disabilities
- **Multilingual**: Breaks down language barriers to education
- **Mobile-First**: Works on low-end devices common in underserved areas

### Target Users

- Students in low-income communities
- Adult learners seeking basic skills
- Users with visual impairments
- Non-native English speakers
- People in areas with limited internet connectivity
