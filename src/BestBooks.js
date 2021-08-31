import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

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
	const newBook = response.data;
	const books = [...this.state.books, newBook];
	this.setState({ books }); 
  }

  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
			<Carousel key={0}>
				{this.state.books.map(book => {
					return (
					<Carousel.Item key={book._id}>
					{/* <img
						className="d-block w-100"
						src="holder.js/800x400?text=First slide&bg=373940"
						alt="First slide"
					/> */}
					<Carousel.Caption>
						<h3>{book.title}</h3>
						<p>{book.description}</p>
					</Carousel.Caption>
				</Carousel.Item>)
				}) 
				};
			</Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
