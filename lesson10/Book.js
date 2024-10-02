// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання".
//Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  static oldestBook(bookArray) {
    const years = bookArray.map((book) => book.year);
    const minYear = Math.min(...years);
    const result = bookArray.filter((book) => book.year === minYear);
    return console.log('The oldest book is:', result);
  }
  printInfo() {
    console.log(`Book ${this.title} was written by ${this.author} in ${this.year}.`);
  }
  get title() {
    return this._title;
  }
  set title(newTitle) {
    if (typeof newTitle === 'string' && newTitle.trim() !== '') {
      this._title = newTitle;
    } else {
      throw new Error('Invalid title. It should be a non-empty string.');
    }
  }
  get author() {
    return this._author;
  }
  set author(newAuthor) {
    if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
      this._author = newAuthor;
    } else {
      throw new Error('Invalid Author. It should be a non-empty string.');
    }
  }
  get year() {
    return this._year;
  }
  set year(newYear) {
    if (Number.isInteger(newYear)) {
      this._year = newYear;
    } else {
      throw new Error('Invalid year of publication. It should be a number.');
    }
  }
}
