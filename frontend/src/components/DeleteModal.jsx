import { useDispatch } from "react-redux";

// Import Bootstrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import Libraries
import { ToastContainer, toast } from "react-toastify";

// Import Icons
import { FaTimes } from "react-icons/fa";

const DeleteModal = ({
  delId,
  deleteModal,
  deleteModalClose,
  loading,
  delFunction,
}) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      await dispatch(delFunction(delId)).unwrap();
      toast.success("Record has been deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      toast.error(err.message || "Failed to delete the record");
    }
  };

  return (
    <Modal
      show={deleteModal}
      onHide={deleteModalClose}
      centered
      className="custom_modal"
    >
      <ToastContainer />
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
              onClick={handleDelete}
              className="btn-md"
              variant="danger"
              disabled={loading === "loading"}
            >
              {loading === "loading" ? "Deleting" : "Delete"}
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
