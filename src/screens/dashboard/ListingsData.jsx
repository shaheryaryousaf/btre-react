import { useState } from "react";

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
import { listingsData } from "../../dummyData";

const ListingsData = () => {
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
              <h2>Listings</h2>
              <p>You can see all listings here</p>
            </div>
            <Link
              to="/dashboard/listings/add"
              className="btn btn-md btn-primary"
            >
              Add New Listing
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
                    <th>Address</th>
                    <th>Asking Price</th>
                    <th>Realtor</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {listingsData.map((l, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {l.address} {l.city}, {l.city}
                      </td>
                      <td>{l.price}</td>
                      <td>Jenny Johnson</td>
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

export default ListingsData;
