// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль

const numbersList = [1,10,14,2,4,5,43,34];
const numbersListSort = Array.from(numbersList).sort((a, b) => a-b);
console.log(numbersList)
console.log(numbersListSort)

