import React, { Component } from 'react';
import BookCard from './BookCard';
import Client from './Client';
import './Gallery.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            page: null,
            query: null
        };
        this.renderBook = this.renderBook.bind(this);
        this.loadBooks = this.loadBooks.bind(this);
        this.loadInformation = this.loadInformation.bind(this);
        this.searchBooks = this.searchBooks.bind(this);
        this.renderContainer = this.renderContainer.bind(this);
        this.renderErrorPage = this.renderErrorPage.bind(this);
    }
    loadInformation(data) {
        this.props.onInformationLoad(data);
    }
    searchBooks() {
        Client.searchBooks(JSON.stringify(this.props.query))
                .then(res=>{
                    this.setState({books: res.data.searchBooks, page: null, query: this.props.query})
                })
                .catch(err=>{throw(err)});
    }
    loadBooks() {
        Client.getBooks(this.props.page, this.props.active)
                .then(res=>{
                    this.setState({books: res.data.getBooks, page: this.props.page})
                })
                .catch(err=>{throw(err)});
    }
    renderBook(data) {
        return (
            <BookCard onCloserLook={this.loadInformation} data={data}></BookCard>
        )
    }
    renderContainer() {
        return (
            <div className="gallery-container">
                {this.state.books.map(this.renderBook)}
            </div>
        )
    }
    renderErrorPage() {
        return (
            <div className="error-container">
                <h2 className="error-message">Your search yielded no results!</h2>
                <h4 className="error-message">Please try again or visit the home page.</h4>
            </div>
        )

    }
    render() {
        if (this.props.query == null && this.props.page != this.state.page) {
            this.loadBooks();
        } else if (this.props.query !=  this.state.query) {
            this.searchBooks();
        }
        if (this.state.books == null) {
            return this.renderErrorPage();
        }
        return this.state.books.length ? this.renderContainer() : this.renderErrorPage();

    }
}
