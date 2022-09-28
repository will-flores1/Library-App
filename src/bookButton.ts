import Book from "./book";
import Main from "./main";

export default class BookButton {
	main;
	parentBook;
	button;

	constructor(main: Main, parentBook: Book) {
		this.main = main;
		this.parentBook = parentBook;
		this.button = this.create();
	}

	create() {
		const button = document.createElement("button");
		button.type = "button";
		button.classList.add("btn", "btn-sm", "me-2");
		return button;
	}
}
