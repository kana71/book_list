import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { Component } from 'react'

import BookTable from './components/BookTable'; 
import AddBook from './components/AddBook';

class App extends Component {
  render() {
    return (
      <div className="container card mt-4 p-4">

        <div className="text">
          <h1>Add Book:</h1>
        </div>

        <AddBook /> 

        <BookTable />


      </div>
    );
  }
}

export default App;

// class App extends Component {

//   constructor(props) {
//     super(props); 

//     this.state = {
//       books: []
//     }; 
//   }

//   onBookCreated(book) {
//     this.state.books.push(book); 
//     this.setState({
//       book: this.state.books
//     });
//   }




//   render() {
//     return (
//       <div className="container card mt-4 p-4">

//         <div className="text-center">
//           <h1>Add Book</h1>
//         </div>

//         <AddBook
//           createBook={(book) => this.onBookCreated(book)} 
//         />

//         <BookTable books={this.state.books}/>
      
//       </div>
//     );
//   }
// }


