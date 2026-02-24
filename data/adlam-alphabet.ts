export interface AdlamLetter {
  id: string;
  adlamChar: string; // caractère ADLaM (forme isolée)
  adlamInitial: string; // forme initiale
  adlamMedial: string; // forme médiane
  adlamFinal: string; // forme finale
  latinEquivalent: string; // équivalent en alphabet latin (peul)
  ipa: string; // prononciation API
  name: string; // nom de la lettre
  description: string; // description
  examples: Array<{
    word: string; // mot en ADLaM
    latin: string; // transcription latine
    translation: string; // traduction française
    audioUrl?: string; // URL de l'audio
  }>;
  strokeOrder?: string[]; // ordre des traits (pour l'écriture)
  difficulty: 'easy' | 'medium' | 'hard'; // difficulté d'apprentissage
}

// Données factices pour les 28 lettres ADLaM
// À remplacer par des données réelles validées par un linguiste peul
export const adlamAlphabet: AdlamLetter[] = [
  {
    id: '01',
    adlamChar: '𞤀',
    adlamInitial: '𞤀',
    adlamMedial: '𞤀',
    adlamFinal: '𞤀',
    latinEquivalent: 'a',
    ipa: '/a/',
    name: 'Alif',
    description: 'Première lettre de l\'alphabet ADLaM, correspond au son /a/.',
    examples: [
      { word: '𞤀𞤤𞤢', latin: 'ala', translation: 'outil' },
      { word: '𞤀𞤣𞤢𞤥', latin: 'adam', translation: 'homme' },
    ],
    difficulty: 'easy',
  },
  {
    id: '02',
    adlamChar: '𞤁',
    adlamInitial: '𞤁',
    adlamMedial: '𞤁',
    adlamFinal: '𞤁',
    latinEquivalent: 'b',
    ipa: '/b/',
    name: 'Ba',
    description: 'Deuxième lettre, correspond au son /b/.',
    examples: [
      { word: '𞤁𞤢𞤦𞤢', latin: 'baba', translation: 'père' },
      { word: '𞤁𞤫𞤤𞤮', latin: 'belo', translation: 'ventre' },
    ],
    difficulty: 'easy',
  },
  {
    id: '03',
    adlamChar: '𞤂',
    adlamInitial: '𞤂',
    adlamMedial: '𞤂',
    adlamFinal: '𞤂',
    latinEquivalent: 'ɓ',
    ipa: '/ɓ/',
    name: 'Bha',
    description: 'Troisième lettre, correspond au son /ɓ/ (implosif bilabial).',
    examples: [
      { word: '𞤂𞤢𞤤𞤢', latin: 'ɓala', translation: 'balai' },
      { word: '𞤂𞤮𞤪𞤮', latin: 'ɓoro', translation: 'argent' },
    ],
    difficulty: 'medium',
  },
  {
    id: '04',
    adlamChar: '𞤃',
    adlamInitial: '𞤃',
    adlamMedial: '𞤃',
    adlamFinal: '𞤃',
    latinEquivalent: 'mb',
    ipa: '/mb/',
    name: 'Mba',
    description: 'Quatrième lettre, correspond au son /mb/.',
    examples: [
      { word: '𞤃𞤢𞤦𞤢', latin: 'mbaɓa', translation: 'mouton' },
      { word: '𞤃𞤮𞤪𞤮', latin: 'mboro', translation: 'cheval' },
    ],
    difficulty: 'medium',
  },
  {
    id: '05',
    adlamChar: '𞤄',
    adlamInitial: '𞤄',
    adlamMedial: '𞤄',
    adlamFinal: '𞤄',
    latinEquivalent: 'bh',
    ipa: '/ɓʰ/',
    name: 'Bhya',
    description: 'Cinquième lettre, correspond au son /ɓʰ/.',
    examples: [
      { word: '𞤄𞤢𞤤𞤢', latin: 'bhala', translation: 'œuvre' },
      { word: '𞤄𞤮𞤪𞤮', latin: 'bhoro', translation: 'grain' },
    ],
    difficulty: 'hard',
  },
  // Continuer pour les 23 lettres restantes...
  // Pour le moment, nous allons créer des données factices pour les 28 lettres
];

// Générer 23 lettres factices supplémentaires
const additionalLetters = Array.from({ length: 23 }, (_, i) => {
  const index = i + 6;
  const latinEquivalents = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ŋ', 'o', 'p', 'r', 's', 't', 'u', 'w', 'y', 'ƴ', 'ʼ'];
  const latin = latinEquivalents[i] || `letter${index}`;
  return {
    id: `${index.toString().padStart(2, '0')}`,
    adlamChar: `�${String.fromCodePoint(0xE900 + i)}`, // Ceci est incorrect, juste pour la démo
    adlamInitial: `�${String.fromCodePoint(0xE900 + i)}`,
    adlamMedial: `�${String.fromCodePoint(0xE900 + i)}`,
    adlamFinal: `�${String.fromCodePoint(0xE900 + i)}`,
    latinEquivalent: latin,
    ipa: `/${latin}/`,
    name: `Letter ${index}`,
    description: `Lettre ADLaM n°${index}, correspond au son /${latin}/.`,
    examples: [
      { word: `𞤀${String.fromCodePoint(0xE900 + i)}𞤢`, latin: `a${latin}a`, translation: 'exemple' },
      { word: `𞤁${String.fromCodePoint(0xE900 + i)}𞤮`, latin: `b${latin}o`, translation: 'exemple' },
    ],
    difficulty: i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'medium' : 'hard',
  };
});

// Concaténer les lettres réelles (5) avec les factices (23)
export const allAdlamLetters: AdlamLetter[] = [...adlamAlphabet, ...additionalLetters];

// Fonction utilitaire pour obtenir une lettre par son ID
export function getLetterById(id: string): AdlamLetter | undefined {
  return allAdlamLetters.find(letter => letter.id === id);
}

// Fonction utilitaire pour obtenir une lettre par son équivalent latin
export function getLetterByLatin(latin: string): AdlamLetter | undefined {
  return allAdlamLetters.find(letter => letter.latinEquivalent === latin);
}