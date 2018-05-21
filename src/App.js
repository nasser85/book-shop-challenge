import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import InformationPage from './InformationPage';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevButton: false,
            nextButton: false,
            isGalleryView: true,
            page: 1,
            totalPages: 10,
            active: false,
            search: null,
            currentData: null,
            home: false
        }
        this.hasPrev = this.hasPrev.bind(this);
        this.hasNext = this.hasNext.bind(this);
        this.renderGallery = this.renderGallery.bind(this);
        this.renderInformationPage = this.renderInformationPage.bind(this);
        this.changePages = this.changePages.bind(this);
        this.enterInformationPage = this.enterInformationPage.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.goHome = this.goHome.bind(this);
    }
    componentDidMount() {
        this.hasPrev();
        this.hasNext();
    }
    componentDidUpdate() {
        this.hasPrev();
        this.hasNext();
    }
    setSearch(query) {
        this.setState({
            search: query,
            totalPages: 1,

        })
    }
    enterInformationPage(data) {
        this.setState({currentData : data, isGalleryView : false, home: true});
    }
    hasPrev() {
        if (this.state.isGalleryView && this.state.page > 1 && !this.state.prevButton) {
            this.setState({prevButton: true});
        }
        if (this.state.isGalleryView && this.state.page == 1 && this.state.prevButton) {
            this.setState({prevButton: false});
        }
    }
    hasNext() {
        if (this.state.isGalleryView && this.state.page < this.state.totalPages && !this.state.nextButton) {
            this.setState({nextButton: true});
        }
        if (this.state.isGalleryView && this.state.page == this.state.totalPages && this.state.nextButton) {
            this.setState({nextButton: false});
        }
    }
    goHome() {
        this.setState({
            prevButton: false,
            nextButton: false,
            isGalleryView: true,
            page: 1,
            totalPages: 10,
            active: false,
            search: null,
            currentData: null,
            home: false
        })
    }
    changePages(up) {
        let newPage = up ? this.state.page + 1 : this.state.page - 1;
        this.setState({page: newPage});
    }
    renderGallery() {
        return (
            <Gallery onInformationLoad={this.enterInformationPage} page={this.state.page} active={this.state.active} query={this.state.search}></Gallery>
        )
    }
    renderInformationPage() {
        return (
            <InformationPage data={this.state.currentData}></InformationPage>
        )
    }
    render() {
        return (
            <div className="app">
                <Header onReturnHome={this.goHome} queryAvailable={this.setSearch} prev={this.state.prevButton} next={this.state.nextButton} home={this.state.search != null || this.state.home} paginate={this.changePages}></Header>
                {this.state.isGalleryView ? this.renderGallery() : this.renderInformationPage() }
            </div>
        )
    }
}
