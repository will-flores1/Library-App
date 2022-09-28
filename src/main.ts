// Import our custom CSS
import "./scss/styles.scss";
import Library from "./library";
import AddBookModel from "./addBookModal";

export default class Main {
	// region Properties
	library;
	localLibrary;
	addBookModal;
	// endregion

	// region Constructor
	constructor() {
		this.library = new Library(this);
		this.localLibrary = this.getLocalStorage();
		this.addBookModal = new AddBookModel(this);
	}
	// endregion

	// region Methods
	getLocalStorage() {
		if (!localStorage.getItem("library")) {
			localStorage.setItem("library", JSON.stringify([]));
		}
		return JSON.parse(localStorage.getItem("library")!);
	}

	saveLocalStorage() {
		localStorage.setItem("library", JSON.stringify(this.localLibrary));
	}

	setUp() {
		this.addBookModal.setUp();
		this.library.display();
	}
	// endregion
}

const main = new Main();
main.setUp();
