//? Q.Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book = {
  title: "Two States",
  author: "chetan bhagat",
  pages: 20
};

const getBookDetails = (book) => {
  const { pages } = book;
  return pages > 100 ? true : false;
};

console.log(getBookDetails(book));
