import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DeleteBookButton from './DeleteBookButton';


const server = process.env.REACT_APP_BASE_URL;


class BestBooks extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      books: [],
    };
  }

  async componentDidMount() {

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

  deleteBook = async (bookToDelete) => {
    const url = `${server}/books/${bookToDelete._id}`;

    try {
      const response = await axios.delete(url);
      console.log(response.data);
      const filteredBooks = this.state.books.filter(book => book._id !== bookToDelete._id);
      this.setState({ books: filteredBooks });
    } catch (error) {
      console.error(error);
    }
  }  

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
          <DeleteBookButton info={book} onDelete={this.deleteBook}/>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default BestBooks;
