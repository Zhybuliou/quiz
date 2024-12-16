export default function generateUniqueRandomArray(questions: number, length: number) {

    const uniqueRandomNumbers = new Set();

    while (uniqueRandomNumbers.size < questions) {
        const randomNumber = Math.floor(Math.random() * length);
        uniqueRandomNumbers.add(randomNumber);
    }
    return Array.from(uniqueRandomNumbers);
}