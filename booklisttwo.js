
// book class
class book  {
    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

// ui class
 class UI {
     static displayBooks() {
         const storedBooks = [
             {
                   title:'iron',
                   author:'john',
                   isbn:'123'
             },
             {
                title:'iron2',
                author:'johnfav',
                isbn:'1234'
             }
         ];

         const books = storedBooks;
         console.log(books)

         books.forEach((book) => UI.addBookToList(book));
     }
      static addBookToList(book) {
          const list = document.querySelector('#book-list');

          const row = document.createElement("tr");

          row.innerHTML=`
          <td>${book.title}</td> 
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

          list.appendChild(row);
      }
      static deleteBook(el) {
          if(el.classList.contains('delete')) {
              el.parentElement.parentElement.remove();
          }
      }

      static showAlert(message,className) {
        const div =document.createElement('div');
        div.className =`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container =document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);    
        setTimeout(() => 
            document.querySelector('.alert').remove(),
            3000);
        }
      


         static clearFields() {
             document.querySelector('#title').value='';
             document.querySelector('#author').value='';
             document.querySelector('#isbn').value='';
         }

         
 }
// store class

// events:display book
    document.addEventListener('DOMContentLoaded',UI.displayBooks());
// events:add book

    document.querySelector('#book-form').addEventListener('submit',(e) => {

        e.preventDefault();

        const title =document.querySelector('#title').value;
        const author =document.querySelector('#author').value;
        const isbn =document.getElementById('isbn').value;

        if(title==='' || author ==='' || isbn === '') {
            UI.showAlert('fill the form','danger');

        }else{

            const booki = new book(title,author,isbn);

        UI.addBookToList(booki);

        UI.showAlert('Book Added','success');
        UI.clearFields();
        console.log(booki);
        }

      

    });
    document.querySelector('#book-list').addEventListener('click',(e) =>{
       UI.deleteBook(e.target);
       UI.showAlert('Book DELETED..!','info');
    });