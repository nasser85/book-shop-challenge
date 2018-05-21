import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.executeSearch = this.executeSearch.bind(this);
    }
    executeSearch() {
        this.props.onSearch(this.refs.query);
    }
    render() {
        let searchClass = this.props.visible ? 'search-container' : 'search-container hidden';
        return (
            <div className={searchClass}>
                  <input ref="query" id="search-bar"></input>
                  <div className="search-button-container"><span className="search-button">SEARCH</span></div>
            </div>
        )
    }

}
