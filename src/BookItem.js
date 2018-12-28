import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookItem extends Component {
  state = {
    shelf: 'none';
  }

  updateShelf = (book, event) {
    BooksAPI.update(book, event.target.value);
    this.setState({
      shelf: event.target.value,
    });
  }

  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>//needs data
          <div className="book-shelf-changer">
            <select onChange={(event) => this.updateShelf(book, event) value={this.state.shelf || book.shelf}}> //need some logic for the current shelf here
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div> //needs data
        <div className="book-authors">{book.authors}</div> //needs data
      </div>
    );
  }
}

export default BookItem;
