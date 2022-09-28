// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Library from './library'

class Main {
  // region Properties
  library;
  localLibrary;
  // endregion

  // region Constructor
  constructor() {
     this.library = new Library(this)
     this.localLibrary = this.getLocalStorage();
  }
  // endregion

  // region Methods
  getLocalStorage() {
    if (!localStorage.getItem("library")) {
      localStorage.setItem("library", JSON.stringify([]))
    }
      return JSON.parse(localStorage.getItem("library")!)
  }

  saveLocalStorage() {
    localStorage.setItem("library", JSON.stringify(this.localLibrary))
  }

  setUp() {
    
  }
  // endregion
}

const main = new Main