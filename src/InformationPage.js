import React, { Component } from 'react';
import './InformationPage.css';

export default class InformationPage extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        let data = this.props.data;
        console.log(data);
        data.image = data.image == null ? 'https://store.bookbaby.com/BookShop/CommonControls/BookShopThemes/bookshop/OnePageBookCoverImage.jpg?BookID=BK00014814' : data.image;
        return (
            <div className="information-grid">
                <div className="intro-container">
                    <img className="intro-image" src={data.image.indexOf("http") == -1 ? "https://" + data.image : data.image} alt={data.title} ></img>
                </div>
                <div className="content-container" dangerouslySetInnerHTML={{ __html: data.description }}>

                </div>
            </div>
        )

    }
}
