import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import BookFormModal from './BookFormModal'
import axios from 'axios';
import AddBookButton from './AddBookButton';

const server = process.env.REACT_APP_BASE_URL;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null,
			addBook: false,
		}
	}

	loginHandler = (user) => {
		this.setState({
			user,
		})
	}

	logoutHandler = () => {
		this.setState({
			user: null,
		})
	}

	handleNewBookClick = async (book) => {
		book.email = this.state.user.email;
	 const response = await axios.post(`${server}/books`, book)
   const newBook = response.body;
   console.log(newBook);
		this.setState ({ 
      addBook: false,
     });
     this.getUserBooks(newBook);
	}

  // getUserBooks = (books) => {
  //     this.setState({
  //       books: [...this.state.books, ...books],
  //     })
  //   } else {
  //     this.setState({
  //       books: [...this.state.books, books],
  //     })
  // }

	handleModalOpen = () => {
		this.setState ({ addBook: true });
	}

	handleModalClose = () => {
		this.setState ({ addBook: false });		
	}

	render() {
		return (
			<>
				<Router>
					<Header user={this.state.user} onLogout={this.logoutHandler} />
					<Switch>

						<Route exact path="/">
							{this.state.user ?
								<>
									<BestBooks books={this.state.books} getBooks={this.getUserBooks} user={this.state.user.email}/>
									<AddBookButton onClick={this.handleModalOpen}>Add A Book</AddBookButton>
								</>
								:
								<Login onLogin={this.loginHandler} />
							}
							{this.state.addBook ?
								<>
									<BookFormModal 
										handleModalClose={this.handleModalClose} 
										handleClick={this.handleNewBookClick} 
										show={this.state.addBook}
									/>
								</>
								:
								<></>
							}
						</Route>

						<Route exact path="/profile">
							<Profile user={this.state.user} />
						</Route>


					</Switch>
					<Footer />
				</Router>

			</>
		)
	}

	testrender() {
		return (
			<BestBooks />
		)
	}
}

export default App;
