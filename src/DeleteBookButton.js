import axios from "axios";
import { Component } from "react";
import { Button } from "react-bootstrap";


const server = process.env.REACT_APP_BASE_URL;

export default class DeleteBookButton extends Component {
    
    delete = () => {
        this.props.onDelete(this.props.info);
    }
    
    render() {
        return (
        <Button onClick={this.delete}>Delete me baby</Button>
        )
    }
}
