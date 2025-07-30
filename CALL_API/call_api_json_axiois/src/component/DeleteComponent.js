import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { deleteProductById } from "../service/productService";

function DeleteComponent ({ isShowModal, handleCloseDeleteModal, deleteProduct }) {
    const handleDelete = async () => {
        try {
            await deleteProductById(deleteProduct.id);
            toast.success("Delete Success");
            handleCloseDeleteModal();
        } catch (error) {
            console.log(error);
            toast.error("Delete Failed")
        }
    }
    return (
        <>
      <Modal show={isShowModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure delete <strong>{deleteProduct?.name}</strong></Modal.Body>
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
    )
}

export default DeleteComponent ;