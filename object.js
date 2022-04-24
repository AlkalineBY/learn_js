// Задача 1. Привет, object
const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

// Задача 2. Проверка на пустоту
const obj = {
    name: 'Oleg',
};
const isEmpty = (obj) => {
    for (let key in obj) {
        return false; // Не понимаю почему не работает через console.log
    }
    return true;
};
isEmpty(obj);

// Задача 3. Сумма свойств объекта
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
const sumSalaries = (obj) => {
    let salary = 0;

    for (let key in obj) {
        salary = salary + obj[key];
    }
    return salary;
}
console.log(sumSalaries(salaries));

// Задача 4. Умножаем все числовые свойства на 2
const menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};
const multiOptions = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
            console.log(obj[key]);
        }
    }
}
multiOptions(menu);
