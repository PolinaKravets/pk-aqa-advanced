import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Atlas Shrugged', 'Ayn Randi', 1957);
const book2 = new Book('1984', 'George Orwell', 1949);
const book3 = new Book('Cien años de soledad', 'Gabriel García Márquez', 1967);
book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook('A Little Life', 'Hanya Yanagihara', 2015, 'mobi');
ebook1.printInfo();

Book.oldestBook([book1, book2, book3, ebook1]);

const ebook2 = EBook.convertToEbook(book1, 'PDF');
ebook2.printInfo();
