// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

function handleNum(number, callback1, callback2) {
  if (number % 2 === 0) {
    return callback1();
  }

  return callback2();
}

function handleEven() {
  console.log('number is even');
}

function handleOdd() {
  console.log('number is odd');
}
handleNum(7, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);
