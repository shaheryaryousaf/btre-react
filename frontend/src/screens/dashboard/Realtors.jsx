import { useState, useEffect } from "react";

// Import Redux Stuff
import {
  getAllRealtors,
  allRealtors,
  realtorsStatus,
  deleteRealtor,
  deleteRealtorStatus,
} from "../../api/realtorApiSlice";
import { useDispatch, useSelector } from "react-redux";

// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

// Import Components
import Loader from "../../components/Loader";
import DeleteModal from "../../components/DeleteModal";

// Import Icons
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

// Import Libraries
import { Link } from "react-router-dom";

const Realtors = () => {
  const dispatch = useDispatch();

  const realtors = useSelector(allRealtors);
  const realtorsLoading = useSelector(realtorsStatus);

  const deleteLoading = useSelector(deleteRealtorStatus);

  useEffect(() => {
    if (realtorsLoading === "idle") {
      dispatch(getAllRealtors());
    }
  }, [dispatch]);

  /*
   * Delete Record modal
   */
  const [selectDelRecord, setSelectDelRecord] = useState(null);
  const [recordDeleteModal, setRecordDeleteModal] = useState(false);
  const recordDeleteModalClose = () => setRecordDeleteModal(false);
  const recordDeleteModalshow = (itemId) => {
    setRecordDeleteModal(true);
    setSelectDelRecord(itemId);
  };

  return (
    <div className="dashboradPage">
      <Container>
        {/* Page Top */}
        <Row>
          <Col
            lg={12}
            className="d-flex justify-content-between align-items-start"
          >
            <div>
              <Link className="btn btn-trans btn-sm mb-3" to="/dashboard">
                <span>Back to Dashoard</span>
              </Link>
              <h2>Realtors</h2>
              <p>You can see all realtors here</p>
            </div>
            <Link
              to="/dashboard/realtors/add"
              className="btn btn-md btn-primary"
            >
              Add New Realtor
            </Link>
          </Col>
        </Row>

        {/* Record Table */}
        <div className="records_data mt-0">
          <Row>
            <Col lg={12}>
              {realtorsLoading === "loading" ? (
                <Loader />
              ) : (
                <Table className="custom_table mt-3">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Is MVP</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {realtors.map((r, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{r.name}</td>
                        <td>{r.phone_number}</td>
                        <td>{r.email}</td>
                        <td>{r.is_mvp}</td>
                        <td>
                          <Link to={`/dashboard/realtors/${r._id}/edit`}>
                            <FaPencilAlt color="gray" title="Update Realtor" />
                          </Link>
                          &nbsp;
                          <FaTrashAlt
                            color="gray"
                            title="View Detail"
                            onClick={() => recordDeleteModalshow(r._id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
        </div>
      </Container>

      {/* Delete Modal */}
      <DeleteModal
        delId={selectDelRecord}
        deleteModal={recordDeleteModal}
        deleteModalClose={recordDeleteModalClose}
        loading={deleteLoading}
        delFunction={deleteRealtor}
      />
    </div>
  );
};

export default Realtors;
