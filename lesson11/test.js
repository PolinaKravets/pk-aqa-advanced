export default function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch todo');
      }
      return response.json();
    })
    .then((todo) => {
      // Обробляємо успішно отриманий об'єкт todo
      console.log('Todo received:', todo);
      return todo; // Повертаємо об'єкт todo
    })
    .catch((error) => {
      // Обробка помилок
      console.error('Error occurred:', error);
      throw error; // Повторно викидаємо помилку, щоб проміс залишався відхиленим
    });
}

// Імплементуйте функцію checkNumber, яка перевіряє, чи передане число менше 10 і повертає Promise.
// Якщо число менше 10, функця має повернути Promise що вирішується успішно і повертає рядок "Success",
// в іншому випадку - Promise має бути відхилений та повернути інстанс класу Error з повідомленням"Failure"
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve('Success');
    } else {
      reject(new Error('Failure'));
    }
  });
}
