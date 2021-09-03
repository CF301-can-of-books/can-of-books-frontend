import axios from "axios";
import { Component } from "react";
import { Button } from "react-bootstrap";


const server = process.env.REACT_APP_BASE_URL;

export default class DeleteBookButton extends Component {

    // handleDelete = async (catToDelete) => {
    //     const cats = this.state.cats.filter(candidate => candidate._id !== catToDelete._id);
    //     this.setState({ cats });
    //   };

    //JOE! Arrow function!!
    deleteBook = async () => {
        console.log(this.props.bookId, 'bookId');
        console.log(this.props.user, 'user');
        const apiUrl = `${server}/books/${this.props.bookId}?email=${this.props.user}`;
        const response = await axios.delete(apiUrl)
        
        
        const books = this.props.books.filter(book => book._id !== response.data._id)/* Not sure about response.data._id*/
        this.setState({ books });
        /*
        This whole functionality needs to move to BestBooks. 
        Switch the onClick attribute below to {this.deleteBook} when you do.
        And finally update the {this.props...} above to reflect {this.state}.
        */

    }

    render() {
        return (
        <Button onClick={this.deleteBook}>Delete me baby</Button>
        )
    }
}