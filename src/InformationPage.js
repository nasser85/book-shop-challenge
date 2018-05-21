import React, { Component } from 'react';
import './InformationPage.css';

export default class InformationPage extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        let data = this.props.data;
        window.scroll(0,0);
        data.image = data.image == null ? 'https://store.bookbaby.com/BookShop/CommonControls/BookShopThemes/bookshop/OnePageBookCoverImage.jpg?BookID=BK00014814' : data.image;
        return (
            <div className="information-grid">
                <div className="intro-container">
                    <img className="intro-image" src={data.image.indexOf("http") == -1 ? "https://" + data.image : data.image} alt={data.title} ></img>
                </div>
                <div className="content-container">
                    <div className="content-header">
                        <h1>{data.title}</h1>
                        <h3><em>{data.authors[0]['display_name']}</em></h3>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    <div className="content-footer">
                        <p><span>{data.price}</span> | <span>{data.active ? 'in stock' : 'out of stock'}</span></p>
                        <p>Primary ISBN: {data.primary_isbn}</p>
                        <p><small><em>{data.primary_bisacs.join(' ')}</em></small></p>
                    </div>
                </div>
            </div>
        )

    }
}
