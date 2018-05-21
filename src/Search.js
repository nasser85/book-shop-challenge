import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.executeSearch = this.executeSearch.bind(this);
        this.exitSearch = this.exitSearch.bind(this);
    }
    executeSearch() {
        this.props.onSearch(this.refs.query.value);
        this.refs.query.value = '';
    }
    exitSearch() {
        this.props.onExit();
        this.refs.query.value = '';
    }
    render() {
        let searchClass = this.props.visible ? 'search-container' : 'search-container hidden';
        if (this.props.visible) {
            this.refs.query.focus();
        }
        return (
            <div className={searchClass}>
            <div className="exit-container"><span onClick={this.exitSearch} className="exit-search">X</span></div>
                  <input ref="query" id="search-bar"></input>
                  <div className="search-button-container"><span onClick={this.executeSearch} className="search-button">SEARCH</span></div>
            </div>
        )
    }

}
