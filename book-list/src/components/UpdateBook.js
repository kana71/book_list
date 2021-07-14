import { elementType } from 'prop-types';
import React, { Component } from 'react'
import Book from '../models/Book';

export default class UpdateBook extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            name: '', 
            author: '', 
            isbn: '',
        };
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
