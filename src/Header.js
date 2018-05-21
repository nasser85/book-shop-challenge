import React, { Component } from 'react';
import Search from './Search';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false
        }
        this.paginateUp = this.paginateUp.bind(this);
        this.paginateDown = this.paginateDown.bind(this);
        this.openSearch = this.openSearch.bind(this)
        this.exitSearch = this.exitSearch.bind(this);
        this.searched = this.searched.bind(this);
        this.navigateHome = this.navigateHome.bind(this)
    }
    paginateUp() {
        console.log('hello')
        this.props.paginate(true);
    }
    paginateDown() {
        this.props.paginate(false);
    }
    searched(books) {
        this.setState({searchVisible:false});
        this.props.queryAvailable(books);
    }
    openSearch() {
        this.setState({searchVisible: true});
    }
    exitSearch() {
        this.setState({searchVisible:false});
    }
    navigateHome() {
        this.props.onReturnHome();
    }
    render() {
        let paginationClass = this.props.home ? 'hide' : 'pagination';
        let prevClass = this.props.prev ? 'prev' : 'hide';
        let nextClass = this.props.next ? 'next' : 'hide';
        let homeClass = this.props.home ? 'home' : 'hide';
        return (
            <div>
                <nav className="header">
                        <span onClick={this.openSearch} className="search-icon">search</span>
                        <span onClick={this.navigateHome} className={homeClass}>home</span>
                        <span className={paginationClass}><span className={prevClass} onClick={this.paginateDown}>previous</span> <span className={this.props.home || !this.props.next || !this.props.prev ? 'hide' : ''}>&nbsp;|&nbsp;</span> <span className={nextClass} onClick={this.paginateUp}>next</span></span>
                </nav>
                <Search onExit={this.exitSearch} onSearch={this.searched} visible={this.state.searchVisible}></Search>
            </div>
        )

    }
}
