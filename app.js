const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 300, true)];

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
//TODO: format the book class so that it loads into the grid view with wrapping
function showLibrary(){
    myLibrary.forEach(function(book){
        let card = document.createElement('div');
        card.classList.add('book');
        document.getElementById('content-books').appendChild(card);
        for (let prop in book){
            card.appendChild(document.createElement('p'));
            card.lastElementChild.textContent = book[prop];
        }
    });
}
showLibrary(myLibrary);