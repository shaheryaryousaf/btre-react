import { useState, useEffect } from "react";

// Import Redux Stuff
import {
  getAllRealtors,
  allRealtors,
  realtorsStatus,
} from "../../api/realtorApiSlice";
import { useDispatch, useSelector } from "react-redux";

// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

// Import Components
import DeleteModal from "../../components/DeleteModal";

// Import Icons
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

// Import Libraries
import { Link } from "react-router-dom";

// Import Dummy Data
import { realtorsData } from "../../dummyData";

const Realtors = () => {
  const dispatch = useDispatch();

  const realtors = useSelector(allRealtors);
  const realtorsLoading = useSelector(realtorsStatus);

  useEffect(() => {
    dispatch(getAllRealtors());
  }, [dispatch]);

  /*
    Realtor Delete Modal
    */
  const [deleteModal, setDeleteModal] = useState(false);
  const deleteModalClose = () => setDeleteModal(false);
  const deleteModalShow = () => setDeleteModal(true);

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
              <Table className="custom_table mt-3">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {realtorsLoading === "loading" ? (
                    <tr>
                      <td colSpan={5}>Loading...</td>
                    </tr>
                  ) : (
                    <>
                      {realtors.map((r, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{r.name}</td>
                          <td>{r.phone_number}</td>
                          <td>{r.email}</td>
                          <td>
                            <FaPencilAlt color="gray" title="Update Realtor" />{" "}
                            &nbsp;
                            <FaTrashAlt
                              color="gray"
                              title="View Detail"
                              onClick={deleteModalShow}
                            />
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Delete Modal */}
      <DeleteModal
        deleteModal={deleteModal}
        deleteModalClose={deleteModalClose}
      />
    </div>
  );
};

export default Realtors;
