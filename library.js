let books = ["Great Gatsby","Pride and Prejudice","To Kill A Mockingbird"]


function addToFront() {
    let bookInput = document.getElementById('bookInput');
    const newBook = bookInput.value.trim();

    if(newBook) {
        books.unshift(newBook);
        bookInput.value='';
        displayBooks();
    }

}

function removeFromFront() {

}

function addToEnd() {

}

function removeFromEnd() {
    
}

displayBooks();
function displayBooks()  {
    let bookList = document.getElementById('bookList');
    if(books.length === 0) {
        bookList.innerHTML = `<p>No Books on Shelf</p>`
    }

    let html = `<strong>Front of Shelf</strong><br>`

    books.forEach((item, index)=> {
        html += `${index + 1}. ${item}<br>`
    })
    
    html += `<strong>End of Shelf</strong`
    bookList.innerHTML = html;
}