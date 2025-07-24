import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteById } from "../service/studentService";
function DeleteComponent({ isShowModal, handleCloseModal, deleteStudent }) {
  const handleDelete = () => {
    deleteById(deleteStudent.id);
    handleCloseModal();
  };
  return (
    <>
      <Modal show={isShowModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure delete {deleteStudent.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteComponent;
