// ДЗ: 1

let car = {
    model: "Mazda 6",
    year: 2018,
    mileage: "55000 km",
    price: "$17000",
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
            }
        }
    }
};

car.getInfo();

car.color = 'white';
car.engine = '2.0';

car.getInfo(); // виводимо результат

// ДЗ: 2

const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service]);
                total += price;
            }
        }
        return total + ' грн';
    },
    minPrice: function() {
        let min = null;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service]);
                if (min === null || price < min) {
                    min = price;
                }
            }
        }
        return min + ' грн';
    },
    maxPrice: function() {
        let max = null;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service]);
                if (max === null || price > max) {
                    max = price;
                }
            }
        }
        return max + ' грн';
    }
};

// Додаємо нову послугу
services['Розбити скло'] = "200 грн";

console.log(services.price()); // Виводить загальну вартість - 440 грн
console.log(services.minPrice()); // Виводить мінімальну вартість - 60 грн
console.log(services.maxPrice()); // Виводить максимальну вартість - 200 грн