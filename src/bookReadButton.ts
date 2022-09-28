import Book from "./book";
import BookButton from "./bookButton";
import Main from "./main";

export default class BookReadButton extends BookButton {
	// region Constructor
	constructor(main: Main, parentBook: Book) {
		super(main, parentBook);
		this.button.textContent = "Read";
		this.setUp();
	}
	// endregion

	// region Methods
	getParentBookCardFooter() {
		const parentBookContainer = document.getElementById(this.parentBook.id);
		return parentBookContainer!.querySelector(".card-footer");
	}

	toggleParentBookReadStatus() {
		this.parentBook.readStatus = !this.parentBook.readStatus;
		let parentBookCardFooter = this.getParentBookCardFooter();
		parentBookCardFooter!.textContent = "";
		parentBookCardFooter!.appendChild(this.parentBook.getReadStatus());
	}

	getLocalStorageParentBookIndex() {
		return this.main.localLibrary.findIndex((book: string) => {
			return JSON.parse(book).id === this.parentBook.id;
		});
	}

	toggleParentBookStatusInLocalStorage() {
		let localStorageParentBookIndex = this.getLocalStorageParentBookIndex();
		this.main.localLibrary[localStorageParentBookIndex] = JSON.stringify({
			title: this.parentBook.title,
			author: this.parentBook.author,
			pages: this.parentBook.pages,
			read: !this.parentBook.readStatus,
			id: this.parentBook.id,
		});
		this.main.saveLocalStorage();
	}

	setStyle() {
		if (this.parentBook.readStatus) {
			this.button.classList.add("btn-success");
			this.button.classList.remove("btn-outline-success");
		} else {
			this.button.classList.add("btn-outline-success");
			this.button.classList.remove("btn-success");
		}
	}

	setUp() {
		this.setStyle();
		this.button.addEventListener("click", () => {
			this.toggleParentBookStatusInLocalStorage();
			this.toggleParentBookReadStatus();
			this.setStyle();
		});
	}
	// endregion
}
