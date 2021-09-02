import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
// import { Image } from 'react-bootstrap';
// import art from 'preacher.jpg'

const server = process.env.REACT_APP_BASE_URL;

class BestBooks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
		}
		console.log(this.props.books);
	}


	/* TODO: Make a GET request to your API to fetch books for the logged in user  */
	async componentDidMount() {
		const response = await axios.get(`${server}/books?email=${this.state.user}`);
		const books = response.data;
		this.props.getBooks(books);
	}

	render() {
		return (
			<>
				<h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
				{this.props.books.length ? (	
					<Carousel className="w-50" style={{margin: 'auto', marginTop: "50px"}}>
						{this.props.books.map(book => this.carouselItem(book))}
					</Carousel>
				) : (
					<h3>No Books Found</h3>
				)}
			</>
		)
	}

	carouselItem(book) {
		return (
			<Carousel.Item key={book._id} style={{ height: '100%' }} >
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
		)
	}
}

export default BestBooks;
