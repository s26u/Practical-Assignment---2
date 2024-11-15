document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("book-list");

    const books = [ 
        { title: "The Guide", author: "R.K. Narayan", year: 1958 }, 
        { title: "White Tiger", author: "Aravand Adiga", year: 2008 }, 
        { title: "The Discovery of India", author: "Jawaharlal Nehru", year: 1946 } 
    ]; 

    setTimeout(() => {
        displayBooks(books);
    }, 1000); 

    function displayBooks(books) {
        let output = '';
        books.forEach(book => {
            output += `
                <div class="book">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">by ${book.author}</div>
                    <div class="book-year">Published: ${book.year}</div>
                </div>
            `;
        });
        bookList.innerHTML = output;
    }
});