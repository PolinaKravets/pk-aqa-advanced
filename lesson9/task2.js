// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
  title: 'Atlas Shrugged',
  author: 'Ayn Rand',
  year: 1957,
};
const { title, author } = book;
console.log(title, author);
