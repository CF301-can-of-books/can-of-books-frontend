import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
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

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
				
              	{/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
			  	{/* <Login /> */}
            </Route>
            <Route exact path="/profile">
              <div>

              <BestBooks />
              </div>
              	{/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
			  	{/* <Login /> */}
            </Route>
            	{/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          		{/* <Footer /> */}
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
