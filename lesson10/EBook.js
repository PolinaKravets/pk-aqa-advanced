// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book.
// Додайте до класу EBook нову властивість, наприклад, "формат файлу".
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook
// (все те саме що і для Book але ще формат файлу).
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }
  static convertToEbook(book, fileFormat) {
    if (!(book instanceof EBook)) {
      return new EBook(book.title, book.author, book.year, fileFormat);
    }
  }
  printInfo() {
    console.log(
      `Book ${this.title} was written by ${this.author} in ${this.year}. This book is in ${this.fileFormat} format`,
    );
  }
  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(newFileFormat) {
    if (typeof newFileFormat === 'string' && newFileFormat.trim() !== '') {
      this._fileFormat = newFileFormat;
    } else {
      throw new Error('Invalid file format. It should be a non-empty string.');
    }
  }
}
