const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 300, false)];
    
const addBtn = document.getElementById('addBtn');
const closeBtn = document.getElementById('closeDiag');
const submitBtn = document.getElementById('submitBtn');
const dialog = document.getElementById('input-dialog');
const content = document.getElementById('content-books');
const form = document.getElementById('input-form');

function Book(title, author, numPages, isRead) {
    //TODO: add constructor
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}
function openDialog() {
    const dialog = document.getElementById('input-dialog');
    dialog.showModal();
}
function addBookToLibrary(){
    if(!form.checkValidity()){
        alert("Please fill out the required inputs!");
    }
    else{
        myLibrary.push(new Book(
            document.getElementById("title").value,
            document.getElementById("author").value,
            document.getElementById("pages").value,
            document.getElementById("isRead").checked
        ));
        showLibrary(myLibrary);
    }
}

function showLibrary(){
    clearGrid();
    let idNum = 0;
    myLibrary.forEach(function(book){
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
            myLibrary[event.target.id].isRead = event.target.checked;
            showLibrary();
        });

        card.appendChild(document.createElement('button'));
        card.lastElementChild.classList.add('addBtn');
        card.lastElementChild.textContent = 'Remove';
        card.lastElementChild.setAttribute('id', idNum);
        card.lastElementChild.addEventListener('click', (event)=>{
            myLibrary.splice(event.target.id, 1);
            showLibrary();
        });
        idNum++;
    });
}
function clearGrid(){
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }
}
addBtn.addEventListener("click", openDialog);
submitBtn.addEventListener("click", addBookToLibrary);
closeBtn.addEventListener("click", () => {
    dialog.close();
});
showLibrary(myLibrary);