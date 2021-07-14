import { elementType } from 'prop-types';
import React, { Component } from 'react'
import Book from '../models/Book';


export default class AddBook extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            name: '', 
            author: '', 
            isbn: '',
        };
    }

    onAddBook() {
        const book = new Book(this.state.name, this.state.author, this.state.isbn); 
        this.props.createBook(book); 
        this.setState({ name: '', author: '', isbn: ''})
    }

    onNameInputChanged(e) {
        this.setState({ name: e.target.value })
    }

    onAuthorInputChanged(e) {
        this.setState({ author: e.target.value })
    }

    onIsbnInputChanged(e) {
        this.setState({ isbn: e.target.value })
    }




    render() {
        return (
            <div className="mt-3">
                
                {/* Title */}
                <label for="title" class="title fw-bold">Title</label>
                <div className="input-group mb-3">
                    <input 
                        value={this.state.name}
                        onChange={(e) => this.onNameInputChanged(e)}
                        type="text" 
                        className="form-control" 
                        placeholder="Title" />
                </div>

                {/* Author */}
                <label for="author" class="author fw-bold">Author</label>
                <div className="input-group mb-3">
                    <input 
                        value={this.state.author}
                        onChange={(e) => this.onAuthorInputChanged(e)}
                        type="text" 
                        className="form-control" 
                        placeholder="Author" />
                </div>

                {/* ISBN# */}
                <label for="isbn" class="isbn fw-bold">ISBN#</label>
                <div className="input-group mb-3">
                    <input 
                        value={this.state.isbn}
                        onChange={(e) => this.onIsbnInputChanged(e)}
                        type="number" 
                        className="form-control" 
                        placeholder="ISBN#" />
                </div>

                {/* Submit Button */}
                <div class="d-grid gap-2">
                    <button onClick={() => this.onAddBook()}
                        className="btn btn-outline-secondary fw-bold"
                        type="button">
                        SUBMIT</button>
                </div>
            </div>
        )
    }
}
