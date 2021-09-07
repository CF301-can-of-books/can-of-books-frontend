import { Button } from "react-bootstrap";
import { Component } from "react";


export default class AddBookButton extends Component {



	render() {
		return (
			<Button onClick={this.props.onClick}>Add a Book</Button>
		)
	}
}
