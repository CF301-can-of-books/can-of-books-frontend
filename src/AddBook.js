import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class AddBook extends Component {

    makeBook = (event) => {
        event.preventDefault();
        // console.log(event.target.bookTitle.value);
    let newBook = {
        title: event.target.bookTitle.value,
        description: event.target.bookDescription.value,
        status: event.target.bookRead.checked ? 'read' : 'unread',
    }
    this.props.handleClick(newBook);
    }

    render() {
        return (
            <>
            <Form onSubmit={this.makeBook}>
                <Form.Group className="mb-3" controlId="bookTitle">
                    <Form.Label>Add a Book</Form.Label>
                    <Form.Control type="title" placeholder="Book Title" />
                    <Form.Text className="text-muted">
                         &nbsp;
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookDescription">
                    <Form.Control type="description" placeholder="Book Description" />
                    <Form.Text className="text-muted">
                        &nbsp;
                        &nbsp;
                    </Form.Text>
                </Form.Group>   
                <Form.Group className="mb-3" controlId="bookRead">
                    <Form.Check>
                        <Form.Check.Input variant="primary" type='checkbox' isValid />
                        <Form.Check.Label style={{color: 'black'}}>{'Have you read the book?'}</Form.Check.Label>
                    </Form.Check>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add My Book!
                </Button>
            </Form>
            </>
        )
    }
}