// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
//  Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

///variant 1
function printTextWithDelay(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

printTextWithDelay('Hello, this message will appear after 2 seconds', 2000);

// variant 2
function printText(text) {
  return console.log(text);
}
setTimeout(printText, 5000, 'Hello, this message will appear after 5 seconds');
