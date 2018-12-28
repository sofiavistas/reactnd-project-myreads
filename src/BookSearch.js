import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';

class BookSearch extends Component {

  state = {
    searchTerm: '',
    books: []
  }

    updateSearch = searchTerm => {
      if (searchTerm) {
        BooksAPI.search(searchTerm.trim()).then((books) => (
          this.setState({
            books: books
          })
        ))
      } else {
        this.setState({
          books: []
        })
      }

      this.setState({
        searchTerm: searchTerm
      })
    }

    render() {
      const { searchTerm, books } = this.state;

      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => this.updateSearch(event.target.value)}
                value={searchTerm}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                books.map((book) =>(
                  <li key={book.id}>
                    <BookItem book={book} />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      );
    }
}

export default BookSearch;
