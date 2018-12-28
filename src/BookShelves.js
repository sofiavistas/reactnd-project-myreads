import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class BookShelves extends Component {
  render() {
    const { allBooks } = this.props;

    render(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={allBooks} title={"Currently Reading"} shelf={"currentlyReading"}>
          </div>
          <div>
            <BookShelf books={allBooks} title={"Want To Read"} shelf={"wantToRead"}>
          </div>
          <div>
            <BookShelf books={allBooks} title={"Read"} shelf={"read"}>
          </div>
        <div>
        <div className="open-search">
          <Link to="/search">Add a book<Link>
        </div>
      </div>
    );
  }

}

export default BookShelves;
