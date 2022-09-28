import { v4 as uuidv4 } from "uuid";
import BookDeleteButton from "./bookDeleteButton";
import BookReadButton from "./bookReadButton";
import Main from "./main";

export interface bookTypes {
	title?: string;
	author?: string;
	pages?: string;
	readStatus?: boolean;
	id?: string;
}

export default class Book {
	// region Properties
	main;
	title;
	author;
	pages;
	readStatus;
	id;
	card;
	deleteButton;
	readButton;
	// endregion

	// region Constructor
	constructor(
		main: Main,
		title: string,
		author: string,
		pages: string,
		readStatus: boolean,
		id?: string
	) {
		this.main = main;
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.readStatus = readStatus;
		this.id = this.getId(id!);

		this.card = this.createBookCard();
		this.deleteButton = new BookDeleteButton(this.main, this);
		this.readButton = new BookReadButton(this.main, this);
	}
	// endregion

	// region Getters
	getId(id: string) {
		if (id) {
			return id;
		} else {
			return uuidv4();
		}
	}

	getReadStatus() {
		let newStatus = document.createElement("span");
		if (this.readStatus) {
			newStatus.textContent = "Read";
		} else {
			newStatus.textContent = "Not Read";
			newStatus.classList.add("text-muted");
		}
		return newStatus;
	}
	// endregion

	// region Methods
	createBookCard() {
		const bookCardTemplate: HTMLTemplateElement =
			document.querySelector("#bookCard")!; // maybe not template element
		const newBookCard = bookCardTemplate.content;
		// console.log(document.importNode(newBookCard, true));
		return document.importNode(newBookCard, true);
	}

	fillBookCard() {
		this.card.querySelector("#bookTitle")!.textContent = this.title;
		this.card.querySelector("#bookAuthor")!.textContent = `By ${this.author}`;
		this.card.querySelector("#bookPages")!.textContent = `${this.pages} Pages`;

		this.card.querySelector(".card-body")!.appendChild(this.readButton.button);
		this.card
			.querySelector(".card-body")!
			.appendChild(this.deleteButton.button);
		this.card.querySelector(".card-footer")!.appendChild(this.getReadStatus());
	}

	display() {
		const bookCardContainer = document.createElement("div")!;
		bookCardContainer.id = this.id;
		document.querySelector("#libraryCards")?.appendChild(bookCardContainer);
		this.fillBookCard();
		bookCardContainer.appendChild(this.card);
	}
	// endregion
}
