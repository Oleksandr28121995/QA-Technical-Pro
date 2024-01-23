// ДЗ: 1
let regex = /^[^Aa]{6,}$/;

console.log(regex.test("9349390eciaejqenkj"));
console.log(regex.test("jnwadf"));
console.log(regex.test("qu98349fu23norf923908fj2903i"));

// ДЗ: 2
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Цьому email не довіряємо
    },
];

// Валідація email
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Масив для зберігання цих email
var trustedEmails = [];

// Перевірка кожного об'єкту у масиві
for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (emailRegex.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails);