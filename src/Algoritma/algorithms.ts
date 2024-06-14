// 1. Membalikkan huruf dalam string, angka tetap di akhir kata
export function reverseAlphabet(input: string): string {
    const alphabets = input.replace(/[^a-zA-Z]/g, '').split('');
    let result = '';
    for (const char of input) {
        if (/[a-zA-Z]/.test(char)) {
            result += alphabets.pop();
        } else {
            result += char;
        }
    }
    return result;
}

// 2. Menemukan kata terpanjang dalam kalimat
export function longestWord(sentence: string): { word: string, length: number } {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return { word: longest, length: longest.length };
}

// 3. Menghitung kemunculan kata dalam array
export function countOccurrences(input: string[], query: string[]): number[] {
    return query.map(q => input.filter(i => i === q).length);
}

// 4. Menghitung selisih dari jumlah diagonal matriks NxN
export function diagonalDifference(matrix: number[][]): number {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}
