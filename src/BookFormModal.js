import { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default class BookFormModal extends Component {

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

	closeModal = () => {
		this.props.handleModalClose();
	}

	render() {
		return (
			<Modal show={this.props.show} onHide={this.closeModal}>
				<Modal.Header closeButton onClick={this.closeModal}>
					<Modal.Title>Add a Book</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={this.makeBook}>
						<Form.Group className="mb-3" controlId="bookTitle">
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
								<Form.Check.Label style={{ color: 'black' }}>{'Have you read the book?'}</Form.Check.Label>
							</Form.Check>
						</Form.Group>
						<Button onClick={this.closeModal} variant="secondary">Cancel</Button>
						<Button type="submit" variant="primary">Save your new book</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
				</Modal.Footer>
			</Modal>
		)
	}
}