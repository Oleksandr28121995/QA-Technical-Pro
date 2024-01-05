// Домашнє завдання 1: Малювання трикутника

// Спосіб 1: Використання циклів і повторення символів
let height = 5;
let symbol = '*';

for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += symbol;
    }
    console.log(line);
}

// Спосіб 2: З використанням циклу for
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

drawTriangle(5, '*');

// Спосіб 3: З використанням методу repeat
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = symbol.repeat(i);
        console.log(row);
    }
}
drawTriangle(5, '*');

// Домашнє завдання 2: Сума чисел від 1 до 100, не кратних 3
function sumNonMultipleOfThree() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumNonMultipleOfThree());


// Домашнє завдання 3: Функція для підняття до ступеня
function pow(x, y) {
    return Math.pow(x, y);
}
console.log(pow(2, 3)); // Виведе 8
