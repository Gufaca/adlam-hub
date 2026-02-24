// Script pour générer les lettres ADLaM avec leurs codes Unicode
// Basé sur le bloc Unicode U+1E900 à U+1E95F

const adlamUpperCaseStart = 0x1E900; // 𞤀
const adlamLowerCaseStart = 0x1E922; // 𞤢

// Noms des lettres (approximatifs)
const letterNames = [
  'Alif', 'Ba', 'Bha', 'Mba', 'Bhya', 'Ɓi', 'Bi', 'Bu', 'Be', 'Pe', 'Phe',
  'Da', 'Dha', 'Ra', 'Rha', 'Fa', 'Ga', 'Gha', 'Gba', 'Gbe', 'Gbi', 'Gbu',
  'Ja', 'Jha', 'Ka', 'Kha', 'La', 'Li'
];

// Équivalents latins (approximatifs)
const latinEquivalents = [
  'a', 'b', 'ɓ', 'mb', 'bh', 'Ɓ', 'B', 'bu', 'be', 'p', 'ph',
  'd', 'dh', 'r', 'rh', 'f', 'g', 'gh', 'gb', 'gbe', 'gbi', 'gbu',
  'j', 'jh', 'k', 'kh', 'l', 'li'
];

// Générer les 28 lettres majuscules
const uppercaseLetters = [];
for (let i = 0; i < 28; i++) {
  const codePoint = adlamUpperCaseStart + i;
  const char = String.fromCodePoint(codePoint);
  uppercaseLetters.push({
    id: `UPPER_${i.toString().padStart(2, '0')}`,
    char,
    codePoint: `U+${codePoint.toString(16).toUpperCase()}`,
    name: letterNames[i] || `Letter ${i}`,
    latinEquivalent: latinEquivalents[i] || '',
  });
}

// Générer les 28 lettres minuscules
const lowercaseLetters = [];
for (let i = 0; i < 28; i++) {
  const codePoint = adlamLowerCaseStart + i;
  const char = String.fromCodePoint(codePoint);
  lowercaseLetters.push({
    id: `LOWER_${i.toString().padStart(2, '0')}`,
    char,
    codePoint: `U+${codePoint.toString(16).toUpperCase()}`,
    name: letterNames[i] ? letterNames[i].toLowerCase() : `letter ${i}`,
    latinEquivalent: latinEquivalents[i] || '',
  });
}

console.log('Uppercase ADLaM letters:');
uppercaseLetters.forEach(l => {
  console.log(`${l.char} ${l.codePoint} ${l.name} -> ${l.latinEquivalent}`);
});

console.log('\nLowercase ADLaM letters:');
lowercaseLetters.forEach(l => {
  console.log(`${l.char} ${l.codePoint} ${l.name} -> ${l.latinEquivalent}`);
});

// Export pour usage dans le projet
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../data/adlam-letters-generated.ts');
const content = `// Généré automatiquement par scripts/generate-letters.js
// Ne pas modifier manuellement

export interface AdlamLetterGenerated {
  id: string;
  char: string;
  codePoint: string;
  name: string;
  latinEquivalent: string;
}

export const adlamUppercaseLetters: AdlamLetterGenerated[] = ${JSON.stringify(uppercaseLetters, null, 2)};

export const adlamLowercaseLetters: AdlamLetterGenerated[] = ${JSON.stringify(lowercaseLetters, null, 2)};
`;

fs.writeFileSync(outputPath, content, 'utf8');
console.log(`\nFichier généré : ${outputPath}`);