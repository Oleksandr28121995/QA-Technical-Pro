let unit = "км"; // Одиниця вимірювання з домашнього завдання (можемо змінити на год чи кг)
let quantity = 10; // Кількість в даному випадку кілометрів які потрібно перевести в метри

// Змінні для збереження результатів
let resultValue; // кількість метрів які отримали переводячи з кілометрів
let resultUnit; // одиниця вимірювання, в даному вимадку метри

switch (unit) {
    case "км":
        resultValue = quantity * 1000;
        resultUnit = "м";
        break;
    case "год":
        resultValue = quantity * 60;
        resultUnit = "хв";
        break;
    case "кг":
        resultValue = quantity * 1000;
        resultUnit = "г";
        break;
    default:
        console.log("Невідома одиниця вимірювання");
}

// Результат
console.log(`${quantity} ${unit} це ${resultValue} ${resultUnit}.`);
