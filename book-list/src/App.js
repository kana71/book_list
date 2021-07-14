import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import firebase from './firebase/firebase';

import './App.css';
import { Component } from 'react'

import Book from './models/Book';

import BookTable from './components/BookTable'; 
import AddBook from './components/AddBook';


class App extends Component {

  constructor(props) {
    super(props); 

    let booksString = localStorage.getItem('books');
    booksString = booksString ? booksString : '[]'; 
    const books = JSON.parse(booksString);

    this.state = { books: books}; 
  }

  saveBooksState(books) {
    this.setState({ books: books }); 
    localStorage.setItem('books', JSON.stringify(books));
  }

  onBookCreated(book) {
    this.state.books.push(book); 
    this.saveBooksState(this.state.books);
  }

  // onBookUpdated(book) {
  //   const updatedBookArr = this.state.books.map(b => b.id === book.id ? book : b);
  //   this.saveBooksState(updatedBookArr)

  

  onBookRemoved(bookId) {
    const updatedBookArr = this.state.books.filter(book => book.id !== bookId); 

    this.saveBooksState(updatedBookArr)

  }




  render() {
    return (
      <div className="container card mt-4 p-4">

        <div className="text">
          <h1>Add Book:</h1>
        </div>

        <AddBook
          createBook={(book) => this.onBookCreated(book)} 
        />

        <BookTable 
        books={this.state.books}
        bookUpdated={(bookId) => this.onBookUpdate(bookId)}
        bookRemoved={(bookId) => this.onBookRemoved(bookId)}
        />
      
      </div>
    );
  }
}

export default App;

