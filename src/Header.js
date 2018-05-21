import React, { Component } from 'react';
import Search from './Search';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false;
        }
        this.paginateUp = this.paginateUp.bind(this);
        this.paginateDown = this.paginateDown.bind(this);

    }
    paginateUp() {
        console.log('hello')
        this.props.paginate(true);
    }
    paginateDown() {
        this.props.paginate(false);
    }
    searched(books) {
        this.props.queryAvailable(books);
    }
    render() {
        let paginationClass = this.props.home ? 'hide' : 'pagination';
        let prevClass = this.props.prev ? 'prev' : 'hide';
        let nextClass = this.props.next ? 'next' : 'hide';
        let homeClass = this.props.home ? 'home' : 'hide';
        return (
            <div>
                <nav className="header">
                        <span className="search-icon">Search</span>
                        <span className={homeClass}>HOME</span>
                        <span className={paginationClass}><span className={prevClass} onClick={this.paginateDown}>Previous</span> <span className={this.props.home ? 'hide' : ''}>|</span> <span className={nextClass} onClick={this.paginateUp}>Next</span></span>
                </nav>
                <Search onSearch={this.searched} visible={this.state.searchVisible}></Search>
            </div>
        )

    }
}
