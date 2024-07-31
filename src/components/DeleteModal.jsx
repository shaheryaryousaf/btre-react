// Import Bootstrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import Icons
import { FaTimes } from "react-icons/fa";

const DeleteModal = ({ deleteModal, deleteModalClose }) => {
  return (
    <Modal show={deleteModal} onHide={deleteModalClose} centered className="custom_modal">
      <Modal.Body>
        <div className="top d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Delete Record</h5>
          <FaTimes color="gray" onClick={deleteModalClose} />
        </div>
        <p>Are you sure you want to delete this record?</p>
        <Form className="modal_form2">
          <Form.Control hidden />

          <Form.Group className="mt-3">
            <Button className="btn-md btn-closed" onClick={deleteModalClose}>
              Cancel
            </Button>
            &nbsp;
            <Button
              type="submit"
              className="btn-md btn-danger"
              onClick={deleteModalClose}
            >
              Delete
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
