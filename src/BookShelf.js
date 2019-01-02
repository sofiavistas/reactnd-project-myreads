import React, { Component } from 'react';
import BookItem from './BookItem';

class BookShelf extends Component {
  render() {
    const { books, shelf, title } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.filter((book) => book.shelf === shelf).map((book) => (
            <li>
              <BookItem book={book}/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
