let myLibrary = [];

function Book(title, author, pages, status) {
  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}



let addBook = document.getElementById("addBook-btn");
let quesField = document.getElementsByClassName("ques");
let checkField = document.getElementsByClassName("check");
let addButton = document.getElementById("addButton");


addBook.addEventListener("click", function(){

    for (let i = 0; i < quesField.length; i++) {
        quesField[i].style.display = "flex";
    }
    for (let i = 0; i < checkField.length; i++) {
        checkField[i].style.display = "flex";
    }

    addButton.style.display = 'block';

})


addButton.addEventListener("click", function () {
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    const bookCheck = document.getElementById("checkbox").checked;
  
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookCheck ? "Finished" : "Not Finished");
    myLibrary.push(newBook);
  
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("checkbox").checked = false;
  
    displayBooks();
  });
  
  function displayBooks() {
    const bookTable = document.getElementById("tableBook");
    let tableHtml = "<table>";
    tableHtml += "<tr><th>TITLE</th><th>AUTHOR</th><th>PAGES</th><th>STATUS</th><th>DELETE BOOK</th></tr>";
  
    for (let i = 0; i < myLibrary.length; i++) {
      const book = myLibrary[i];
      const statusHTML = `<span>${book.status}</span><br><input type="checkbox" class="readStatus" data-index="${i}" ${book.status === "Finished" ? "checked" : ""}>`;
      tableHtml += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${statusHTML}</td><td><button class="delete-btn" data-index="${i}">Delete</button></td></tr>`;
    }
  
    tableHtml += "</table>";
    bookTable.innerHTML = tableHtml;
  
    // Add event listeners to all "Delete" buttons
    const deleteButtons = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        if (index !== null) {
          // Remove the book from myLibrary array
          myLibrary.splice(index, 1);
          // Redraw the table after removing the book
          displayBooks();
        }
      });
    }
  
    // Add event listeners to all readStatus checkboxes
    const readStatusCheckboxes = document.getElementsByClassName("readStatus");
    for (let i = 0; i < readStatusCheckboxes.length; i++) {
      readStatusCheckboxes[i].addEventListener("change", function () {
        const index = this.getAttribute("data-index");
        if (index !== null) {
          // Update the book status based on the checkbox state
          myLibrary[index].status = this.checked ? "Finished" : "Not Finished";
          // Redraw the table after updating the book status
          displayBooks();
        }
      });
    }
  }








    




