interface WeightedNumber {
    number: number;
    probability: number;
}

const weightedRandomNumber = (weightedNumbers: WeightedNumber[]): number => {
    const totalProbability = weightedNumbers.reduce((acc, wn) => acc + wn.probability, 0);

    // Нормализация вероятностей, если их сумма не равна 1
    const normalizedProbabilities = weightedNumbers.map((wn) => wn.probability / totalProbability);

    // Генерируем случайное число от 0 до 1
    const randomValue = Math.random();

    let cumulativeProbability = 0;
    for (let i = 0; i < normalizedProbabilities.length; i++) {
        cumulativeProbability += normalizedProbabilities[i];
        if (randomValue <= cumulativeProbability) {
            return weightedNumbers[i].number;
        }
    }

    // Если не удалось выбрать число (обычно это происходит из-за округлений), вернуть последний элемент
    return weightedNumbers[weightedNumbers.length - 1].number;
}

// Пример использования
const weightedNumbers: WeightedNumber[] = [
    { number: 1, probability: 0.1 },
    { number: 2, probability: 0.05 },
    { number: 3, probability: 0.2 },
    { number: 4, probability: 0.15 },
    { number: 5, probability: 0.1 },
    { number: 6, probability: 0.1 },
    { number: 7, probability: 0.05 },
    { number: 8, probability: 0.1 },
    { number: 9, probability: 0.1 },
    { number: 10, probability: 1 },
];

const randomValue: number = weightedRandomNumber(weightedNumbers);
console.log(randomValue); // Выведет случайное число с учетом вероятностей