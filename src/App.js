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
import AddBook from './AddBook'
import axios from 'axios';
import { Button } from 'react-bootstrap';

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

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>

            <Route exact path="/">
              {this.state.user ?
                <BestBooks />
                :
                <Login onLogin={this.loginHandler} />
              }
              {this.state.addBook ?
              <Button onClick={() => { this.setState = { addBook: true } }}>Add A Book</Button>
                :
                <></>
              }
            </Route>

            <Route exact path="/profile">
              <Profile user={this.state.user} />
            </Route>

            {this.state.addBook ?
              <Route exact path="/add">
                <AddBook handleClick={this.handleNewBookClick} />
              </Route>
              :
              <></>
            }

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
