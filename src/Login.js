import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';
import LoginForm from './LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    }
  }


  handleButtonSubmit = () => {
    let userObj = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.onLogin(userObj);
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handlePassChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

 
  render() {
    return (
      <Card style={{ width: '18rem', marginTop: '50px'}}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginForm onEmailChange={this.handleEmailChange} onPassChange={this.handlePassChange}/>
          <LoginButton onLogin={this.handleButtonSubmit}/>
          {/* TODO: add a `LoginButton` component here that will log the user in */}
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
