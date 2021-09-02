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
import AddBookForm from './AddBookForm'
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
		await axios.post(`${server}/books`, book)
		this.setState = { addBook: false, };
	}

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
									<BestBooks />
									<AddBookButton onClick={this.handleModalOpen}>Add A Book</AddBookButton>
								</>
								:
								<Login onLogin={this.loginHandler} />
							}
							{this.state.addBook ?
								<>
									<AddBookForm handleModalClose={this.handleModalClose} handleClick={this.handleNewBookClick} />
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
