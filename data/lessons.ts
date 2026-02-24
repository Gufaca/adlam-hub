import { Lesson, Exercise } from '@/types';
import { adlamUppercaseLetters } from './adlam-letters-generated';

// Helper pour générer des IDs
const generateId = (prefix: string) => `${prefix}_${Math.random().toString(36).substr(2, 9)}`;

// Lettres ADLaM comme leçons de niveau 1
const letterLessons: Lesson[] = adlamUppercaseLetters.slice(0, 28).map((letter, index) => ({
  id: `letter_${letter.id}`,
  title: `Lettre : ${letter.name} (${letter.char})`,
  description: `Apprenez la lettre ADLaM ${letter.name}, correspondant au son ${letter.latinEquivalent}.`,
  level: 'beginner',
  type: 'letter',
  durationMinutes: 5,
  unlocked: index === 0, // seule la première lettre est débloquée initialement
  completed: false,
  content: [
    {
      type: 'text',
      data: `La lettre <strong>${letter.char}</strong> (${letter.name}) se prononce <strong>/${letter.latinEquivalent}/</strong>.`,
    },
    {
      type: 'text',
      data: `Elle s'écrit de droite à gauche. Voici ses différentes formes : isolée ${letter.char}, initiale ${letter.char}, médiane ${letter.char}, finale ${letter.char}.`,
    },
    {
      type: 'audio',
      data: `/audio/letters/${letter.id}.mp3`, // placeholder
      caption: 'Écoutez la prononciation',
    },
    {
      type: 'interactive',
      data: 'trace', // pour le tracé interactif
      caption: 'Tracez la lettre sur l\'écran',
    },
  ],
  exercises: [
    {
      id: generateId('ex'),
      type: 'multiple-choice',
      question: `Quel est le son de la lettre ${letter.char} ?`,
      options: [
        `/${letter.latinEquivalent}/`,
        '/a/',
        '/b/',
        '/k/',
      ],
      correctAnswer: `/${letter.latinEquivalent}/`,
      explanation: `La lettre ${letter.char} correspond au son /${letter.latinEquivalent}/.`,
      points: 10,
    },
    {
      id: generateId('ex'),
      type: 'multiple-choice',
      question: `Quelle est cette lettre ? 🔊`, // l'audio jouerait la prononciation
      options: [
        letter.char,
        '𞤁',
        '𞤂',
        '𞤃',
      ],
      correctAnswer: letter.char,
      explanation: `C'est la lettre ${letter.name}.`,
      points: 10,
    },
    {
      id: generateId('ex'),
      type: 'typing',
      question: `Tapez la lettre que vous entendez : 🔊`,
      correctAnswer: letter.char,
      explanation: `Vous devez taper ${letter.char}.`,
      points: 15,
    },
  ],
}));

// Syllabes (niveau 2)
const syllableLessons: Lesson[] = [
  {
    id: 'syllable_01',
    title: 'Syllabes simples avec 𞤀 (a)',
    description: 'Apprenez à former des syllabes avec la lettre Alif.',
    level: 'beginner',
    type: 'syllable',
    durationMinutes: 8,
    unlocked: false,
    completed: false,
    content: [
      { type: 'text', data: 'Une syllabe ADLaM se compose d\'une consonne et d\'une voyelle.' },
      { type: 'text', data: 'Exemple : 𞤀 + 𞤁 = 𞤀𞤁 (a-b)' },
      { type: 'audio', data: '/audio/syllables/ab.mp3', caption: 'Écoutez la syllabe' },
    ],
    exercises: [
      {
        id: generateId('ex'),
        type: 'multiple-choice',
        question: 'Quelle syllabe correspond à "ba" ?',
        options: ['𞤀𞤁', '𞤁𞤀', '𞤂𞤀', '𞤀𞤂'],
        correctAnswer: '𞤀𞤁',
        explanation: '𞤀𞤁 se lit "ab" (consonne b + voyelle a).',
        points: 10,
      },
    ],
  },
  // Ajouter plus de syllabes...
];

// Mots (niveau 3)
const wordLessons: Lesson[] = [
  {
    id: 'word_01',
    title: 'Mots courants : famille',
    description: 'Apprenez des mots simples liés à la famille.',
    level: 'intermediate',
    type: 'word',
    durationMinutes: 10,
    unlocked: false,
    completed: false,
    content: [
      { type: 'text', data: 'Voici quelques mots utiles :' },
      { type: 'text', data: '𞤀𞤣𞤢𞤥 (adam) - homme' },
      { type: 'text', data: '𞤀𞤣𞤢𞤥𞤢 (adama) - femme' },
      { type: 'audio', data: '/audio/words/adam.mp3', caption: 'homme' },
    ],
    exercises: [
      {
        id: generateId('ex'),
        type: 'matching',
        question: 'Associez le mot ADLaM à sa traduction.',
        correctAnswer: ['𞤀𞤣𞤢𞤥:homme', '𞤀𞤣𞤢𞤥𞤢:femme'],
        points: 15,
      },
    ],
  },
];

// Phrases (niveau 4)
const phraseLessons: Lesson[] = [
  {
    id: 'phrase_01',
    title: 'Phrases de salutation',
    description: 'Apprenez à saluer en peul.',
    level: 'advanced',
    type: 'phrase',
    durationMinutes: 12,
    unlocked: false,
    completed: false,
    content: [
      { type: 'text', data: 'Salutations courantes :' },
      { type: 'text', data: '𞤀𞤣𞤢𞤥 𞤦𞤢𞤪𞤢𞤲𞤺𞤢 (Adam baranga) - Bonjour (à un homme)' },
      { type: 'audio', data: '/audio/phrases/hello.mp3', caption: 'Bonjour' },
    ],
    exercises: [
      {
        id: generateId('ex'),
        type: 'dictation',
        question: 'Écrivez la phrase que vous entendez : 🔊',
        correctAnswer: '𞤀𞤣𞤢𞤥 𞤦𞤢𞤪𞤢𞤲𞤺𞤢',
        explanation: 'La phrase signifie "Bonjour (à un homme)".',
        points: 20,
      },
    ],
  },
];

// Regrouper toutes les leçons
export const allLessons: Lesson[] = [
  ...letterLessons,
  ...syllableLessons,
  ...wordLessons,
  ...phraseLessons,
];

// Fonctions utilitaires
export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find(lesson => lesson.id === id);
}

export function getLessonsByType(type: Lesson['type']): Lesson[] {
  return allLessons.filter(lesson => lesson.type === type);
}

export function getLessonsByLevel(level: Lesson['level']): Lesson[] {
  return allLessons.filter(lesson => lesson.level === level);
}

export function getNextLesson(currentLessonId: string): Lesson | undefined {
  const index = allLessons.findIndex(lesson => lesson.id === currentLessonId);
  if (index === -1 || index >= allLessons.length - 1) return undefined;
  return allLessons[index + 1];
}