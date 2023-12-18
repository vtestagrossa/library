class Book {
    title = "";
    author = "";
    numPages = 0;
    isRead = false;
    constructor (title, author, numPages, isRead){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.isRead = isRead;
    }
}

Library = new class{
    #library = [
        new Book("The Hobbit", "J.R.R. Tolkien", 300, false)];
    addBookToLibrary = (title, author, pages, isRead) => {
        this.#library.push(new Book(
            title,
            author,
            pages,
            isRead
        ));
    }
    removeBookFromLibrary = (idx) => {
        this.library.splice(idx, 1);
    }
    get library() {
        return this.#library;
    }
    /**
     * @param {number} idx
     */
    set isRead(idx) {
        this.#library[idx].isRead = !this.#library[idx].isRead;
    }
}
Display = new class{
    addBtn = document.getElementById('addBtn');
    closeBtn = document.getElementById('closeDiag');
    submitBtn = document.getElementById('submitBtn');
    dialog = document.getElementById('input-dialog');
    form = document.getElementById('input-form');
    dialog = document.getElementById('input-dialog');
    constructor(){
        this.addBtn.addEventListener('click', () => {
            this.showDialog();
        });
        this.closeBtn.addEventListener('click', () => {
            this.hideDialog();
        });
        this.submitBtn.addEventListener('click', () => {
            this.addBook();
        });
    }
    showGrid = () => {
        let content = document.getElementById('content-books');
        this.clearGrid();
        let idNum = 0;
        Library.library.forEach(function(book){
            let card = document.createElement('div');
            card.classList.add('book');
            content.appendChild(card);
            card.appendChild(document.createElement('label'));
            card.lastElementChild.textContent = "Title: " + book['title'];
            card.appendChild(document.createElement('label'));
            card.lastElementChild.textContent = "Author: " + book['author'];
            card.appendChild(document.createElement('label'));
            card.lastElementChild.textContent = "Pages: " + book['numPages'];
            card.appendChild(document.createElement('div'));
            card.lastElementChild.classList.add('book-group');
            card.lastElementChild.appendChild(document.createElement('label'));
            card.lastElementChild.lastElementChild.textContent = "Has Read? ";
            card.lastElementChild.appendChild(document.createElement('input'));
            card.lastElementChild.lastElementChild.setAttribute('type', 'checkbox');
            //assign an id to the attribute of the checkbox so we can toggle the value later
            card.lastElementChild.lastElementChild.setAttribute('id', idNum);
            card.lastElementChild.lastElementChild.checked = book['isRead'];
            card.lastElementChild.lastElementChild.addEventListener("click", (event) => {
                Library.isRead = event.target.id;
                Display.showGrid();
            });
            card.appendChild(document.createElement('button'));
            card.lastElementChild.classList.add('addBtn');
            card.lastElementChild.textContent = 'Remove';
            card.lastElementChild.setAttribute('id', idNum);
            card.lastElementChild.addEventListener('click', (event)=>{
                Library.removeBookFromLibrary(event.target.id);
                Display.showGrid();
            });
            idNum++;
        });
    }
    clearGrid = () => {
        let content = document.getElementById('content-books');
        while(content.hasChildNodes()){
            content.removeChild(content.firstChild);
        }
    }
    showDialog = () => {
        this.dialog.showModal();
    }
    hideDialog = () => {
        this.dialog.close();
    }
    addBook = () => {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let isRead = document.getElementById("isRead").checked;

        if (!this.form.checkValidity()){
            alert("Please fill out the required inputs!");
        }
        else {
            Library.addBookToLibrary(title, author, pages, isRead);
        }
        this.showGrid();
    }
}

Display.showGrid();