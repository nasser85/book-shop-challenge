import React, { Component } from 'react';
import './BookCard.css';

export default class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
        this.closerLook = this.closerLook.bind(this);
    }
    closerLook() {
        this.props.onCloserLook(this.props.data);
    }
    render() {
        const data = this.props.data;
        data.image = data.image == null ? 'https://store.bookbaby.com/BookShop/CommonControls/BookShopThemes/bookshop/OnePageBookCoverImage.jpg?BookID=BK00014814' : data.image;
        return (
            <div className="book-card">
                    <div onClick={this.closerLook} className="book-card_image-wrapper">
                        <img className="book-card_image" src={data.image.indexOf("http") == -1 ? "https://" + data.image : data.image} alt={data.title} ></img>
                    </div>
              <div className="book-card_info">
                <p className="book-card_author"><small>{data.authors[0]['display_name']}</small></p>
                <h2 className="book-card_title"><span onClick={this.closerLook}>{data.title}</span></h2>
                <p className="book-card_details"><span className="price">${data.price}</span> | <span className="status"><em>{data.active ? 'in stock' : 'out of stock'}</em></span></p>
              </div>
            </div>
        )

    }
}
