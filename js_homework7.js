// ДЗ: 1
function IsNaN(value) {
    return typeof value === 'number' && value !== value;
}

let example1 = 10234;
let example2 = "abcabc";
let example3 = NaN;

console.log(IsNaN(example1));  // Виведе: false
console.log(IsNaN(example2));  // Виведе: false
console.log(IsNaN(example3));  // Виведе: true


// ДЗ: 2
function pad(str, char, length, padStart) {
    let padding = '';

    let padLength = length - str.length;

    if (padLength <= 0) {
        return str;
    }

    while (padding.length < padLength) {
        padding += char;
    }

    padding = padding.substring(0, padLength);

    return padStart ? padding + str : str + padding;
}
console.log(pad('qwerty', '+', 10, true));  // Виведе: '++++qwerty'
console.log(pad('qwerty', '-', 10, false)); // Виведе: 'qwerty----'
console.log(pad('qwerty', '*', 5, true));   // Виведе: 'qwerty', оскільки рядок вже 6 символів


// ДЗ: 3
function checkProbabilityTheory(count) {
    if (count <= 0 || !Number.isInteger(count)) {
        console.log("Будь ласка, введіть додатне ціле число для параметру count.");
        return;
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (1001 - 100) + 100);

        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log("Кількість згенерованих чисел:", totalNumbers);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", `${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(10000);