import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddBookButton from './AddBookButton';
import './App.css';
import BestBooks from './BestBooks';
import BookFormModal from './BookFormModal';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';


const server = process.env.REACT_APP_BASE_URL;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
      books: [],
      addBook: false,
      newBook: null,
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  handleNewBookClickFromModal = async (book) => {
    // add user email to book object
    book.email = this.state.user.email;

    console.log(`Sending book to server at: ${server}/books ...`);

    // get new book from server
    try {
      const response = await axios.post(`${server}/books`, book);
      const newBook = response.data;
      this.setState({
        addBook: false,
        newBook: newBook,
        books: [...this.state.books, this.state.newBook],
      });
    } catch (error) {
      alert(`You've encountered an error and couldn't add your book. ${error}`)
    }
  };


  handleModalOpen = () => {
    this.setState({addBook: true});
  };

  handleModalClose = () => {
    this.setState({addBook: false});
  };

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user}
                  onLogout={this.logoutHandler}/>
          <Switch>

            <Route exact path="/">
              {this.state.user ?
                <>
                  <BestBooks books={this.state.books}
                             getBooks={this.getUserBooks}
                             user={this.state.user.email}
                             addedBook={this.state.newBook}/>
                  <AddBookButton onClick={this.handleModalOpen}>Add A Book</AddBookButton>
                </>
                :
                <Login onLogin={this.loginHandler}/>
              }
              {this.state.addBook ?
                <>
                  <BookFormModal
                    handleModalClose={this.handleModalClose}
                    handleClick={this.handleNewBookClickFromModal}
                    show={this.state.addBook}
                  />
                </>
                :
                <></>
              }
            </Route>

            <Route exact path="/profile">
              <Profile user={this.state.user}/>
            </Route>


          </Switch>
          <Footer/>
        </Router>

      </>
    );
  }
}

export default App;
