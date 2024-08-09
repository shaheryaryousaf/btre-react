import { useEffect, useState } from "react";

// Import Redux Stuff
import {
  getAllListings,
  allListings,
  listingsStatus,
  deleteListing,
  deleteListingStatus,
} from "../../api/listingApiSlice";
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
import numeral from "numeral";

const ListingsData = () => {
  const dispatch = useDispatch();

  const listings = useSelector(allListings);
  const listingsLoading = useSelector(listingsStatus);

  const deleteLoading = useSelector(deleteListingStatus);

  useEffect(() => {
    if (listingsLoading === "idle") {
      dispatch(getAllListings());
    }
  }, [dispatch, listingsLoading]);

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
              {listingsLoading === "loading" ? (
                <Loader />
              ) : (
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
                    {listings?.map((l, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {l.address} {l.city}, {l.city}
                        </td>
                        <td>${numeral(l.price).format("0,0.00")}</td>
                        <td>{l.realtor?.name}</td>
                        <td>
                          <Link to={`/dashboard/listings/${l._id}/edit`}>
                            <FaPencilAlt color="gray" title="Update Listing" />
                          </Link>
                          &nbsp;
                          <FaTrashAlt
                            color="gray"
                            title="View Detail"
                            onClick={() => recordDeleteModalshow(l._id)}
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
        delFunction={deleteListing}
      />
    </div>
  );
};

export default ListingsData;
