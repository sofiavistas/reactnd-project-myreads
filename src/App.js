import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
          allBooks: books
      });
    });
  }

  componentDidUpdate() {
    BooksAPI.getAll().then((books) => {
      this.setState({
          allBooks: books
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelves allBooks={this.state.allBooks} />
        )} />
        <Route exact path='/search' render={() => (
          
        )} />
      </div>
    )
  }
}

export default BooksApp
