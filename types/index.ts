// Types partagés pour l'application ADLaM Hub

export interface User {
  id: string;
  email?: string;
  name?: string;
  avatar?: string;
  streak: number;
  level: number;
  xp: number;
  createdAt: Date;
  lastActiveAt: Date;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'letter' | 'syllable' | 'word' | 'phrase';
  durationMinutes: number;
  content: LessonContent[];
  exercises: Exercise[];
  prerequisites?: string[]; // IDs des leçons prérequises
  unlocked: boolean;
  completed: boolean;
  score?: number; // score de l'utilisateur
}

export interface LessonContent {
  type: 'text' | 'image' | 'audio' | 'video' | 'interactive';
  data: string; // texte, URL, etc.
  caption?: string;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'drag-drop' | 'typing' | 'matching' | 'dictation';
  question: string;
  options?: string[]; // pour multiple-choice
  correctAnswer: string | string[];
  explanation?: string;
  points: number;
}

export interface AdlamLetter {
  id: string;
  char: string;
  name: string;
  latinEquivalent: string;
  ipa: string;
  description: string;
  strokeOrder?: string[]; // ordre des traits
  forms: {
    isolated: string;
    initial: string;
    medial: string;
    final: string;
  };
  audioUrl?: string;
  videoUrl?: string;
}

export interface Word {
  id: string;
  adlam: string;
  latin: string;
  translation: string;
  category: string;
  audioUrl?: string;
  imageUrl?: string;
}

export interface Phrase {
  id: string;
  adlam: string;
  latin: string;
  translation: string;
  context: string;
  audioUrl?: string;
}

export interface TranslationResult {
  source: string;
  target: string;
  sourceLang: 'fr' | 'en' | 'adlam' | 'pulaar-latin';
  targetLang: 'fr' | 'en' | 'adlam' | 'pulaar-latin';
  translatedText: string;
  confidence: number;
}

export interface CommunityPost {
  id: string;
  userId: string;
  content: string;
  adlamText: string;
  latinText: string;
  translation?: string;
  likes: number;
  createdAt: Date;
}

export interface DailyChallenge {
  id: string;
  date: string; // YYYY-MM-DD
  type: 'word' | 'phrase' | 'letter' | 'quiz';
  title: string;
  description: string;
  content: any;
  reward: number; // XP
  completed: boolean;
}

export interface UserProgress {
  userId: string;
  completedLessons: string[];
  completedExercises: string[];
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  badges: string[];
}