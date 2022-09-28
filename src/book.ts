import { v4 as uuidv4 } from "uuid";

export interface bookTypes {
	title: string;
	author: string;
	pages: number;
	readStatus: boolean;
	id?: string;
}

export default class Book {
	// region Properties
	title;
	author;
	pages;
	readStatus;
	id;
	// endregion

	// region Constructor
	constructor({ title, author, pages, readStatus }: bookTypes) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.readStatus = readStatus;
		this.id = uuidv4();
	}
	// endregion

	// region Getters
	getTitle() {
		return this.title;
	}

	getAuthor() {
		return this.author;
	}

	getPages() {
		return this.pages;
	}

	getReadStatus() {
		return this.readStatus;
	}

	getId() {
		return this.id;
	}
	// endregion

	// region Setters
	setReadStatus() {
		return !this.readStatus;
	}
	// endregion
}
