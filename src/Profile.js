import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
    }
  }
  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return(
      <>
      {this.state.user ? 
        <p>{this.state.user.email}</p>
        :
        <p>No User signed in</p>
      }
      </>
      ) 
    }
};

export default Profile;
