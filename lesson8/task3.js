// Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
// Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
// Виведіть отриману суму на консоль.

const array = [10, 20, 30, 40, 50];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
