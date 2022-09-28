import {bookTypes} from './book'

interface libraryTypes {
  main: any;
}

export default class Library {
  // region Properties
  main;
  books;
  // endregion

  // region Constructor
  constructor({main}: libraryTypes) {
    this.main = main;
    this.books = this.getBooksFromLocalStorage()
  }
  // endregion

  // region Methods
  getBooksFromLocalStorage() {
    let books = [];
    const localLibrary = this.main.getLocalStorage();
  }

  addBook({book}: bookTypes) { // book is an object so find types
    
  }
  // endregion
}