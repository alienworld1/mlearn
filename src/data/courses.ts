import type { Course } from '../types';

// Sample course data for the MVP
export const courses: Course[] = [
  {
    id: 'basic-math',
    title: 'Basic Math Skills',
    description: 'Learn fundamental mathematical concepts including addition, subtraction, multiplication, and division.',
    content: `
      <h2>Introduction to Basic Math</h2>
      <p>Mathematics is the foundation of logical thinking and problem-solving. In this course, you'll learn essential mathematical operations that form the building blocks of more advanced concepts.</p>
      
      <h3>Addition</h3>
      <p>Addition is combining two or more numbers to get their sum. For example:</p>
      <ul>
        <li>2 + 3 = 5</li>
        <li>10 + 15 = 25</li>
        <li>100 + 250 = 350</li>
      </ul>
      
      <h3>Subtraction</h3>
      <p>Subtraction is finding the difference between numbers. For example:</p>
      <ul>
        <li>5 - 2 = 3</li>
        <li>20 - 8 = 12</li>
        <li>100 - 35 = 65</li>
      </ul>
      
      <h3>Multiplication</h3>
      <p>Multiplication is repeated addition. For example:</p>
      <ul>
        <li>3 × 4 = 12 (same as 3 + 3 + 3 + 3)</li>
        <li>5 × 6 = 30</li>
        <li>8 × 7 = 56</li>
      </ul>
      
      <h3>Division</h3>
      <p>Division is splitting a number into equal groups. For example:</p>
      <ul>
        <li>12 ÷ 3 = 4</li>
        <li>20 ÷ 5 = 4</li>
        <li>35 ÷ 7 = 5</li>
      </ul>
    `,
    difficulty: 'beginner',
    estimatedTime: '30 minutes',
    quiz: {
      id: 'basic-math-quiz',
      courseId: 'basic-math',
      questions: [
        {
          id: 'q1',
          question: 'What is 15 + 27?',
          options: ['40', '42', '43', '45'],
          correctAnswer: 1,
          explanation: '15 + 27 = 42. When adding, we combine the values of both numbers.'
        },
        {
          id: 'q2',
          question: 'What is 8 × 6?',
          options: ['46', '48', '50', '52'],
          correctAnswer: 1,
          explanation: '8 × 6 = 48. This is the same as adding 8 six times: 8+8+8+8+8+8.'
        },
        {
          id: 'q3',
          question: 'What is 63 ÷ 9?',
          options: ['6', '7', '8', '9'],
          correctAnswer: 1,
          explanation: '63 ÷ 9 = 7. Division asks how many groups of 9 can fit into 63.'
        }
      ]
    }
  },
  {
    id: 'english-vocabulary',
    title: 'English Vocabulary Building',
    description: 'Expand your English vocabulary with commonly used words and their meanings.',
    content: `
      <h2>Building Your English Vocabulary</h2>
      <p>A strong vocabulary is essential for effective communication. This course introduces you to commonly used English words that will help you express yourself clearly.</p>
      
      <h3>Common Verbs</h3>
      <p>Verbs are action words that describe what someone or something does:</p>
      <ul>
        <li><strong>Learn</strong> - to gain knowledge or skill</li>
        <li><strong>Teach</strong> - to help someone learn something</li>
        <li><strong>Create</strong> - to make something new</li>
        <li><strong>Discover</strong> - to find something for the first time</li>
        <li><strong>Explore</strong> - to investigate or travel through</li>
      </ul>
      
      <h3>Descriptive Adjectives</h3>
      <p>Adjectives describe or modify nouns:</p>
      <ul>
        <li><strong>Beautiful</strong> - pleasing to look at</li>
        <li><strong>Intelligent</strong> - having good thinking ability</li>
        <li><strong>Generous</strong> - willing to give and share</li>
        <li><strong>Patient</strong> - able to wait calmly</li>
        <li><strong>Creative</strong> - having original ideas</li>
      </ul>
      
      <h3>Essential Nouns</h3>
      <p>Nouns are people, places, things, or ideas:</p>
      <ul>
        <li><strong>Knowledge</strong> - information and skills acquired through experience</li>
        <li><strong>Community</strong> - a group of people living in the same area</li>
        <li><strong>Opportunity</strong> - a chance for advancement or progress</li>
        <li><strong>Challenge</strong> - a difficult task that tests someone's abilities</li>
        <li><strong>Success</strong> - the achievement of a goal</li>
      </ul>
    `,
    difficulty: 'beginner',
    estimatedTime: '25 minutes',
    quiz: {
      id: 'english-vocab-quiz',
      courseId: 'english-vocabulary',
      questions: [
        {
          id: 'q1',
          question: 'What does "generous" mean?',
          options: ['Selfish and greedy', 'Willing to give and share', 'Angry and upset', 'Tired and sleepy'],
          correctAnswer: 1,
          explanation: '"Generous" means willing to give and share with others, showing kindness through giving.'
        },
        {
          id: 'q2',
          question: 'Which word means "to gain knowledge or skill"?',
          options: ['Teach', 'Learn', 'Forget', 'Ignore'],
          correctAnswer: 1,
          explanation: '"Learn" means to gain knowledge or skill through study, experience, or teaching.'
        },
        {
          id: 'q3',
          question: 'What is a "community"?',
          options: ['A single person', 'A building', 'A group of people living in the same area', 'A type of food'],
          correctAnswer: 2,
          explanation: 'A "community" is a group of people who live in the same area and often share common interests or goals.'
        }
      ]
    }
  }
];
