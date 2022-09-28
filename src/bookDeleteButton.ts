import Book from "./book";
import BookButton from "./bookButton";
import Main from "./main";

export default class BookDeleteButton extends BookButton {
	constructor(main: Main, parentBook: Book) {
		super(main, parentBook);
		this.button.textContent = "Delete";
		this.button.classList.add("btn-outline-danger");
		this.setUp();
	}
	// region Methods
	setUp() {
		// Adds click event listener to delete button of card
		this.button.addEventListener("click", () => {
			this.main.library.removeBook(this.parentBook);
			document.getElementById(this.parentBook.id)!.remove();
		});
	}
	// endregion
}
