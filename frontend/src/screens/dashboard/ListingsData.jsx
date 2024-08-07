import { useEffect, useState } from "react";

// Import Redux Stuff
import {
  getAllListings,
  allListings,
  listingsStatus,
} from "../../api/listingApiSlice";
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
import numeral from "numeral";

const ListingsData = () => {
  const dispatch = useDispatch();

  const listings = useSelector(allListings);
  const listingsLoading = useSelector(listingsStatus);

  useEffect(() => {
    dispatch(getAllListings());
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
                  {listingsLoading === "loading" ? (
                    <tr>
                      <td colSpan={5}>Loading...</td>
                    </tr>
                  ) : (
                    <>
                      {listings.map((l, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {l.address} {l.city}, {l.city}
                          </td>
                          <td>${numeral(l.price).format("0,0.00")}</td>
                          <td>{l.realtor?.name}</td>
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

export default ListingsData;
