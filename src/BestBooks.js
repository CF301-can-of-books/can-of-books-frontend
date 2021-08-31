import React from 'react';
import axios from 'axios';

const server = process.env.REACT_APP_BASE_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

// ---what do we want BestBooks to do?
// only handles displaying the books 

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  async componentDidMount() {
	const response = await axios.get(`${server}/books?email=bill@microsoft.com`);
	alert(JSON.stringify(response.data));
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
