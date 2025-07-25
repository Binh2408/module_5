import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteById } from "../service/studentService";
import { toast } from "react-toastify";
function DeleteComponent({ isShowModal, handleCloseDeleteModal, deleteStudent }) {
  const handleDelete = () => {
    deleteById(deleteStudent.id);
    handleCloseDeleteModal();
    toast.success("Delete success");
  };
  return (
    <>
      <Modal show={isShowModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure delete {deleteStudent.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
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
