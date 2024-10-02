// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
// Присвойте значення отримані від цих виразів до змінних

function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response.json();
    })
    .then((todo) => {
      return todo;
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
}
//Використання Promise.all
const allresults = Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch((error) => {
    console.error('Error in Promise.all:', error);
  });

// Використання Promise.race
const firstresult = Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log('First resolved result:', result);
  })
  .catch((error) => {
    console.error('Error in Promise.race:', error);
  });

export { fetchTodo, fetchUser };
