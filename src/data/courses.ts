import type { Course } from '../types';

// Sample course data for the MVP
export const courses: Course[] = [
  {
    id: 'basic-math',
    title: {
      en: 'Basic Math Skills',
      es: 'Habilidades Matemáticas Básicas',
    },
    description: {
      en: 'Learn fundamental mathematical concepts including addition, subtraction, multiplication, and division.',
      es: 'Aprende conceptos matemáticos fundamentales incluyendo suma, resta, multiplicación y división.',
    },
    content: {
      en: `
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
      es: `
        <h2>Introducción a las Matemáticas Básicas</h2>
        <p>Las matemáticas son la base del pensamiento lógico y la resolución de problemas. En este curso, aprenderás operaciones matemáticas esenciales que forman los bloques de construcción de conceptos más avanzados.</p>
        
        <h3>Suma</h3>
        <p>La suma es combinar dos o más números para obtener su total. Por ejemplo:</p>
        <ul>
          <li>2 + 3 = 5</li>
          <li>10 + 15 = 25</li>
          <li>100 + 250 = 350</li>
        </ul>
        
        <h3>Resta</h3>
        <p>La resta es encontrar la diferencia entre números. Por ejemplo:</p>
        <ul>
          <li>5 - 2 = 3</li>
          <li>20 - 8 = 12</li>
          <li>100 - 35 = 65</li>
        </ul>
        
        <h3>Multiplicación</h3>
        <p>La multiplicación es suma repetida. Por ejemplo:</p>
        <ul>
          <li>3 × 4 = 12 (igual que 3 + 3 + 3 + 3)</li>
          <li>5 × 6 = 30</li>
          <li>8 × 7 = 56</li>
        </ul>
        
        <h3>División</h3>
        <p>La división es dividir un número en grupos iguales. Por ejemplo:</p>
        <ul>
          <li>12 ÷ 3 = 4</li>
          <li>20 ÷ 5 = 4</li>
          <li>35 ÷ 7 = 5</li>
        </ul>
      `,
    },
    difficulty: 'beginner',
    estimatedTime: '30 minutes',
    quiz: {
      id: 'basic-math-quiz',
      courseId: 'basic-math',
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What is 15 + 27?',
            es: '¿Cuánto es 15 + 27?',
          },
          options: {
            en: ['40', '42', '43', '45'],
            es: ['40', '42', '43', '45'],
          },
          correctAnswer: 1,
          explanation: {
            en: '15 + 27 = 42. When adding, we combine the values of both numbers.',
            es: '15 + 27 = 42. Al sumar, combinamos los valores de ambos números.',
          },
        },
        {
          id: 'q2',
          question: {
            en: 'What is 8 × 6?',
            es: '¿Cuánto es 8 × 6?',
          },
          options: {
            en: ['46', '48', '50', '52'],
            es: ['46', '48', '50', '52'],
          },
          correctAnswer: 1,
          explanation: {
            en: '8 × 6 = 48. This is the same as adding 8 six times: 8+8+8+8+8+8.',
            es: '8 × 6 = 48. Esto es lo mismo que sumar 8 seis veces: 8+8+8+8+8+8.',
          },
        },
        {
          id: 'q3',
          question: {
            en: 'What is 63 ÷ 9?',
            es: '¿Cuánto es 63 ÷ 9?',
          },
          options: {
            en: ['6', '7', '8', '9'],
            es: ['6', '7', '8', '9'],
          },
          correctAnswer: 1,
          explanation: {
            en: '63 ÷ 9 = 7. Division asks how many groups of 9 can fit into 63.',
            es: '63 ÷ 9 = 7. La división pregunta cuántos grupos de 9 caben en 63.',
          },
        },
      ],
    },
  },
  {
    id: 'english-vocabulary',
    title: {
      en: 'English Vocabulary Building',
      es: 'Construcción de Vocabulario en Inglés',
    },
    description: {
      en: 'Expand your English vocabulary with commonly used words and their meanings.',
      es: 'Expande tu vocabulario en inglés con palabras comúnmente usadas y sus significados.',
    },
    content: {
      en: `
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
      es: `
        <h2>Construyendo tu Vocabulario en Inglés</h2>
        <p>Un vocabulario sólido es esencial para la comunicación efectiva. Este curso te presenta palabras comúnmente usadas en inglés que te ayudarán a expresarte claramente.</p>
        
        <h3>Verbos Comunes</h3>
        <p>Los verbos son palabras de acción que describen lo que alguien o algo hace:</p>
        <ul>
          <li><strong>Learn</strong> - ganar conocimiento o habilidad</li>
          <li><strong>Teach</strong> - ayudar a alguien a aprender algo</li>
          <li><strong>Create</strong> - hacer algo nuevo</li>
          <li><strong>Discover</strong> - encontrar algo por primera vez</li>
          <li><strong>Explore</strong> - investigar o viajar a través de</li>
        </ul>
        
        <h3>Adjetivos Descriptivos</h3>
        <p>Los adjetivos describen o modifican sustantivos:</p>
        <ul>
          <li><strong>Beautiful</strong> - agradable a la vista</li>
          <li><strong>Intelligent</strong> - que tiene buena capacidad de pensamiento</li>
          <li><strong>Generous</strong> - dispuesto a dar y compartir</li>
          <li><strong>Patient</strong> - capaz de esperar con calma</li>
          <li><strong>Creative</strong> - que tiene ideas originales</li>
        </ul>
        
        <h3>Sustantivos Esenciales</h3>
        <p>Los sustantivos son personas, lugares, cosas o ideas:</p>
        <ul>
          <li><strong>Knowledge</strong> - información y habilidades adquiridas a través de la experiencia</li>
          <li><strong>Community</strong> - un grupo de personas que viven en la misma área</li>
          <li><strong>Opportunity</strong> - una oportunidad de avance o progreso</li>
          <li><strong>Challenge</strong> - una tarea difícil que pone a prueba las habilidades de alguien</li>
          <li><strong>Success</strong> - el logro de una meta</li>
        </ul>
      `,
    },
    difficulty: 'beginner',
    estimatedTime: '25 minutes',
    quiz: {
      id: 'english-vocab-quiz',
      courseId: 'english-vocabulary',
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What does "generous" mean?',
            es: '¿Qué significa "generous"?',
          },
          options: {
            en: [
              'Selfish and greedy',
              'Willing to give and share',
              'Angry and upset',
              'Tired and sleepy',
            ],
            es: [
              'Egoísta y codicioso',
              'Dispuesto a dar y compartir',
              'Enojado y molesto',
              'Cansado y somnoliento',
            ],
          },
          correctAnswer: 1,
          explanation: {
            en: '"Generous" means willing to give and share with others, showing kindness through giving.',
            es: '"Generous" significa estar dispuesto a dar y compartir con otros, mostrando bondad a través de dar.',
          },
        },
        {
          id: 'q2',
          question: {
            en: 'Which word means "to gain knowledge or skill"?',
            es: '¿Qué palabra significa "ganar conocimiento o habilidad"?',
          },
          options: {
            en: ['Teach', 'Learn', 'Forget', 'Ignore'],
            es: ['Teach', 'Learn', 'Forget', 'Ignore'],
          },
          correctAnswer: 1,
          explanation: {
            en: '"Learn" means to gain knowledge or skill through study, experience, or teaching.',
            es: '"Learn" significa ganar conocimiento o habilidad a través del estudio, experiencia o enseñanza.',
          },
        },
        {
          id: 'q3',
          question: {
            en: 'What is a "community"?',
            es: '¿Qué es una "community"?',
          },
          options: {
            en: [
              'A single person',
              'A building',
              'A group of people living in the same area',
              'A type of food',
            ],
            es: [
              'Una sola persona',
              'Un edificio',
              'Un grupo de personas que viven en la misma área',
              'Un tipo de comida',
            ],
          },
          correctAnswer: 2,
          explanation: {
            en: 'A "community" is a group of people who live in the same area and often share common interests or goals.',
            es: 'Una "community" es un grupo de personas que viven en la misma área y a menudo comparten intereses o objetivos comunes.',
          },
        },
      ],
    },
  },
];
