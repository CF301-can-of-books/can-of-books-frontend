import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const server = process.env.REACT_APP_BASE_URL;

class BestBooks extends React.Component {
  /**
   * This happens first
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      books: [],
    };
  }


  /**
   * This happens third
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    /* TODO: Make a GET request to your API to fetch books for the logged in user  */

    try {
      const response = await axios.get(`${server}/books?email=${this.state.user}`);
      const books = response.data;

      // handle if 1 or many books
      if (typeof books === typeof []) {
        this.setState({
          books: [...this.state.books, ...books],
        });
      } else {
        this.setState({
          books: [...this.state.books, books],
        });
      }

    } catch (error) {
      // todo: handle error
    }
  }

  /**
   * This happens second
   * @returns {JSX.Element}
   */
  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <Carousel className="w-50" style={{margin: 'auto', marginTop: '50px'}}>
            {
              this.props.addedBook
                ? [this.props.addedBook, ...this.state.books].map(book => this.carouselItem(book))
                : this.state.books.map(book => this.carouselItem(book))
            }
          </Carousel>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    );
  }

  carouselItem(book) {
    return (
      <Carousel.Item key={book._id} style={{height: '100%'}}>
        <img
          className="d-block w-100"
          src="https://placeimg.com/850/300/animals"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default BestBooks;
