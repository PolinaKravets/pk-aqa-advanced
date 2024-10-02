// Порівняння об'єктів: Імплементуйте функцію isObjectsEqual, яка порівнює два об'єкта і повертає true, якщо вони мають однакові ключі та значення, і false в іншому випадку.

// Примітка 1: В даній задачі об'єкти можуть мати лише властивості примітивних типів. Жоден з об'єктів не містить методів Примітка 2: В даній задачі якщо будь-яке значення є рядком то регістр слід ігнорувати. Тобто "javaScript" та "JAVASCRIPT" слід вважати рівними значеннями.

function isObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length != keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (typeof value1 === 'string' && typeof value2 === 'string') {
      if (value1.toLowerCase() !== value2.toLowerCase()) {
        return false;
      }
    } else if (typeof value1 !== typeof value2) {
      return false;
    } else if (value1 != value2) {
      return false;
    }
  }
  return true;
}
export default isObjectsEqual;

// Тестуємо функцію
const obj1 = {
  name: 'javaScript',
  age: 25,
};

const obj2 = {
  name: 'JAVASCRIPT',
  age: 25,
};

const obj3 = {
  name: 'Java',
  age: 25,
};

console.log(isObjectsEqual(obj1, obj2));
console.log(isObjectsEqual(obj1, obj3));

// Видалення ключів: Імплементуйте функцію deleteKeys, яка приймає об'єкт та масив ключів.
//Функція має повернути копію вхідного об'єкту без вказаних ключів.

function deleteKeys(obj, keys) {
  const newDelKeys = { ...obj };
  for (let key of keys) {
    delete newDelKeys[key];
  }
  return newDelKeys;
}
