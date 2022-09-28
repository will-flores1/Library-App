import Book from "./book";

export default class Library {
	// region Properties
	main;
	books;
	// endregion

	// region Constructor
	constructor(main: any) {
		this.main = main;
		this.books = this.getBooksFromLocalStorage();
	}
	// endregion

	// region Methods
	changeDisplayIfEmpty() {
		const emptyLibraryText = document.querySelector("#emptyLibraryText");
		if (this.books.length <= 0) {
			emptyLibraryText!.removeAttribute("hidden");
		} else {
			emptyLibraryText!.setAttribute("hidden", "true");
		}
	}

	getBooksFromLocalStorage() {
		let books = [];
		const localLibrary = this.main.getLocalStorage();
		for (let i = 0; i < localLibrary.length; i++) {
			let book = JSON.parse(localLibrary[i]);
			book = new Book(
				this.main,
				book.title,
				book.author,
				book.pages,
				book.read,
				book.id
			);
			books.push(book);
		}
		return books;
	}

	removeBookFromLocalStorage(bookToDelete: Book) {
		this.main.localLibrary = this.main.localLibrary.filter((book: string) => {
			const bookObj = JSON.parse(book);
			return bookObj.id !== bookToDelete.id;
		});
		this.main.saveLocalStorage();
	}

	removeBook(bookToDelete: Book) {
		this.removeBookFromLocalStorage(bookToDelete);
		this.books = this.books.filter((book: Book) => {
			return book.id !== bookToDelete.id;
		});
		this.changeDisplayIfEmpty();
	}

	addBookToLocalStorage(book: Book) {
		const bookJSONString = JSON.stringify({
			title: book.title,
			author: book.author,
			pages: book.pages,
			read: book.readStatus,
			id: book.id,
		});
		this.main.localLibrary.push(bookJSONString);
		this.main.saveLocalStorage();
	}

	addBook(book: Book) {
		this.addBookToLocalStorage(book);
		this.books.push(book);
	}

	display() {
		this.changeDisplayIfEmpty();
		for (let i = 0; i < this.books.length; i++) {
			this.books[i].display();
		}
	}
	// endregion
}
