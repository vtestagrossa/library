const myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", "300", true)];

function Book(title, author, numPages, isRead) {
    //TODO: add constructor
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    //TODO: add book to library
}

function showLibrary(){
    for (book in myLibrary){
        //TODO: loop through each book in the library and display it on the page
    }
}