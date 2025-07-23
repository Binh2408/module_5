import React from "react";
import { deleteById } from "../../service/student";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class DeleteComponent extends React.Component {

  handleDelete = () => {
    deleteById(this.props.id);
    this.props.onClose();         
    this.props.onDeleted();

  };
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are your sure delete {this.props.name}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleDelete}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default DeleteComponent;
