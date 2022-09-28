import Book from "./book";
import { Modal } from "bootstrap";
import Main from "./main";

export default class AddBookModel {
	main;
	modal;
	cancelButton!: HTMLButtonElement;

	// region Constructor
	constructor(main: Main) {
		this.main = main;
		this.modal = new Modal(document.querySelector("#addBookModal")!);
	}
	// endregion

	// region Methods
	setUpAddBookCard() {
		const addBookCardBody = document.querySelector("#addBookButton");
		addBookCardBody?.addEventListener("click", () => {
			this.modal.show();
		});
	}

	getInputFields() {
		return [
			<HTMLInputElement>document.querySelector("#inputBookTitle"),
			<HTMLInputElement>document.querySelector("#inputBookAuthor"),
			<HTMLInputElement>document.querySelector("#inputBookPages"),
		];
	}

	resetForm() {
		// reset values of inputs in Modal form
		const inputs = this.getInputFields();
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = "";
			inputs[i].classList.remove("is-invalid");
		}
		(<HTMLInputElement>(
			document.querySelector("#inputBookReadStatus")!
		)).checked = false;
	}

	createBookObject() {
		return new Book(
			this.main,
			(<HTMLInputElement>document.querySelector("#inputBookTitle")).value,
			(<HTMLInputElement>document.querySelector("#inputBookAuthor")).value,
			(<HTMLInputElement>document.querySelector("#inputBookPages")).value,
			(<HTMLInputElement>document.querySelector("#inputBookReadStatus")).checked
		);
	}

	isInputValid() {
		const inputs = this.getInputFields();
		let isValid = true;
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value === "") {
				isValid = false;
			}
		}
		return isValid;
	}

	saveBook() {
		const newBook = this.createBookObject();
		console.log(newBook);
		newBook.display();
		this.main.library.addBook(newBook);
	}

	invalidateForm() {
		const inputs = this.getInputFields();
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value === "") {
				inputs[i].classList.add("is-invalid");
			} else {
				inputs[i].classList.remove("is-invalid");
			}
		}
	}

	setUpCancelButton() {
		this.cancelButton = document.querySelector("#addBookModalCancelButton")!;
		this.cancelButton.addEventListener("click", () => {
			this.resetForm();
		});
	}

	setUpSaveButton() {
		const saveButton = document.querySelector("#addBookModalSaveButton")!;
		saveButton.addEventListener("click", () => {
			if (this.isInputValid()) {
				this.saveBook();
				this.modal.hide();
				this.resetForm();
			} else {
				this.invalidateForm();
			}
		});
	}

	setUp() {
		this.setUpAddBookCard();
		this.setUpCancelButton();
		this.setUpSaveButton();
	}
	// endregion
}
