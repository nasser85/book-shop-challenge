import React, { Component } from 'react';
import BookCard from './BookCard';
import Client from './Client';
import './Gallery.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            page: null
        };
        this.renderBook = this.renderBook.bind(this);
        this.loadBooks = this.loadBooks.bind(this);
        this.loadInformation = this.loadInformation.bind(this);
        this.searchBooks = this.searchBooks.bind(this);
    }
    loadInformation(data) {
        this.props.onInformationLoad(data);
    }
    searchBooks() {
        Client.searchBooks(this.props.query)
                .then(res=>{
                    console.log(res.data.searchBooks);
                    this.setState({books: res.data.searchBooks, page: null})
                    console.log('state->', this.state)
                })
                .catch(err=>{throw(err)});
    }
    loadBooks() {
        Client.getBooks(this.props.page, this.props.active)
                .then(res=>{
                    console.log(res.data.getBooks);
                    this.setState({books: res.data.getBooks, page: this.props.page})
                    console.log('state->', this.state)
                })
                .catch(err=>{throw(err)});
    }
    renderBook(data) {
        return (
            <BookCard onCloserLook={this.loadInformation} data={data}></BookCard>
        )
    }
    render() {
        if (this.props.query == null && this.props.page != this.state.page) {
            this.loadBooks();
        } else if (this.props.query !=  null) {
            this.searchBooks();
        }
        return (
            <div className="gallery-container">
                {this.state.books.map(this.renderBook)}
            </div>
        )

    }
}
