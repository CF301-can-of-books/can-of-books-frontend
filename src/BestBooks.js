import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
// import art from 'preacher.jpg'

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
		const books = newBook;
		this.setState({ books });
	}

	render() {
		return (
			<>
				{/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2> */}
				{this.state.books.length ? (
					<Carousel>
						{this.state.books.forEach(book => this.carouselItem(book))}
					</Carousel>
				) : (
					<h3>No Books Found</h3>
				)}
			</>
		)
	}

	carouselItem(book) {
		return (
			<Carousel.Item key={book._id}>
				<img
					className='d-block w-50'
					src='https://via.placeholder.com/800x400'
					alt='blahblah'
				/>
				<Carousel.Caption>
					<h3>{book.title}</h3>
					<p>{book.description}</p>
				</Carousel.Caption>
			</Carousel.Item>
		)
	}

	//   zzzrender() {
	//     return (
	//       <>
	//         <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
	//         {this.state.books.length ? (
	// 			<Carousel>
	// 				{this.state.books.forEach(book => {
	// 					return (
	// 					<Carousel.Item key={book._id} style={{border: 'solid black 2px', margin: '30px'}}>
	// 						 <img
	// 							className="d-block w-100"
	// 							src="../preacher.JPG"
	// 							alt="First slide"
	// 						/>
	// 						<Carousel.Caption>
	// 							<h3>{book.title}</h3>
	// 							<p>{book.description}</p>
	// 						</Carousel.Caption>
	// 					</Carousel.Item>)
	// 				}) 
	// 				};
	// 			</Carousel>
	//         ) : (
	//           <h3>No Books Found :(</h3>
	//         )}
	//       </>
	//     )
	//   }
}

export default BestBooks;
