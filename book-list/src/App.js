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

    this.db = firebase.firestore();

    // let booksString = localStorage.getItem('books');
    // booksString = booksString ? booksString : '[]'; 
    // const books = JSON.parse(booksString);

    // this.state = { books: books}; 

    this.state = { tasks: [] }; 
  };

  componentDidMount() {
    this.fetchTasks();
  }

  async fetchTasks() {
    try {

      const snapshot = await this.db.collection('books').get(); 
      const books = snapshot.docs.map(doc => Book.fromDocment(doc));

      this.setState({ books: books });
      console.log(books);

    } catch(err) {
      console.log(err);
    }
  }

  // saveBooksState(books) {
  //   this.setState({ books: books }); 
  //   localStorage.setItem('books', JSON.stringify(books));
  // }

  async onBookCreated(book) {
    console.log(book); 

    try {
      const docRef = this.db.collection('books').doc(); 
      await docRef.set({
        name: book.name, 
        author: book.author, 
        isbn: book.isbn, 
      }); 

      book.id = docRef.id 
      this.state.books.push(book); 
      this.setState( { books: this.state.books });
    } catch(err) {
      console.log(err)
    }

    // this.state.books.push(book); 
    // this.saveBooksState(this.state.books);
  }

  // onBookUpdated(book) {
  //   const updatedBookArr = this.state.books.map(b => b.id === book.id ? book : b);
  //   this.saveBooksState(updatedBookArr)

  

  async onBookRemoved(bookId) {

    try {
      await this.db.collection('books').doc(bookId).delete();

      const updatedBookArr = this.state.books.filter(book => book.id !== bookId); 
      this.saveBooksState({ books: updatedBookArr });

    } catch(err) {
      console.log(err);
    }
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
        // bookUpdated={(bookId) => this.onBookUpdate(bookId)}
        bookRemoved={(bookId) => this.onBookRemoved(bookId)}
        />
      
      </div>
    );
  }
}

export default App;

