// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  {
    name: 'John Stermak',
    email: 'joster@gmail.com',
    age: 36,
    position: 'PO',
  },
  {
    name: 'Abby Maylor',
    email: 'abma@gmail.com',
    age: 27,
    position: 'PM',
  },
];

for (const { name, email, age, position } of users) {
  console.log(name, email, age, position);
}
