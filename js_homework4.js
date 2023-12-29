// Отримання року від користувача через prompt
let userInput = prompt("Введіть кількість років:");

// Перевірка, чи користувач ввів число та чи воно не є від'ємним
if (!(userInput >= 0 && !isNaN(userInput))) {
    // Повідомлення про помилку, якщо введено нечислове або від'ємне значення
    console.log("Будь ласка, введіть невід'ємне значення.");
} else {
    // Конвертація введеного року в число
    const years = parseInt(userInput);

    // Визначення правильного слова для "рік", "роки" або "років"
    let word;
    if (years === 1) {
        word = "рік";
    } else if (years >= 2 && years <= 4) {
        word = "роки";
    } else {
        word = "років";
    }

    // Результат
    console.log(`${years} ${word}`);
}