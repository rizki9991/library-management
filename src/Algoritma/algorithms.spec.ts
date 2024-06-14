import { reverseAlphabet, longestWord, countOccurrences, diagonalDifference } from './algorithms';

describe('Algorithm Tests', () => {

    it('should reverse alphabet characters in a string', () => {
        expect(reverseAlphabet('NEGIE1')).toBe('EIGEN1');
    });

    it('should find the longest word in a sentence', () => {
        const sentence = "Saya sangat senang mengerjakan soal algoritma";
        expect(longestWord(sentence)).toEqual({ word: 'mengerjakan', length: 11 });
    });

    it('should count occurrences of words in an array', () => {
        const INPUT = ['xc', 'dz', 'bbb', 'dz'];
        const QUERY = ['bbb', 'ac', 'dz'];
        expect(countOccurrences(INPUT, QUERY)).toEqual([1, 0, 2]);
    });

    it('should calculate the difference between sums of the diagonals of an NxN matrix', () => {
        const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
        expect(diagonalDifference(matrix)).toBe(3);
    });

});
