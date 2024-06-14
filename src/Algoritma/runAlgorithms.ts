// src/runAlgorithms.ts

import { reverseAlphabet, longestWord, countOccurrences, diagonalDifference } from './algorithms';

// 1. Membalikkan huruf dalam string, angka tetap di akhir kata
const reversedString = reverseAlphabet('NEGIE1');
console.log(`Reversed String: ${reversedString}`);

// 2. Menemukan kata terpanjang dalam kalimat
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longest = longestWord(sentence);
console.log(`Longest Word: ${longest.word}, Length: ${longest.length}`);

// 3. Menghitung kemunculan kata dalam array
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const occurrences = countOccurrences(INPUT, QUERY);
console.log(`Occurrences: ${occurrences}`);

// 4. Menghitung selisih dari jumlah diagonal matriks NxN
const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const diagonalDiff = diagonalDifference(matrix);
console.log(`Diagonal Difference: ${diagonalDiff}`);
