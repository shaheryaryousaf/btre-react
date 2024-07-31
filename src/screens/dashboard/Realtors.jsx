// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

// Import Icons
import { FaRegEye } from "react-icons/fa";

// Import Libraries
import { Link } from "react-router-dom";

// Import Dummy Data
import { realtorsData } from "../../dummyData";

const Realtors = () => {
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
                  {realtorsData.map((r, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{r.name}</td>
                      <td>{r.phone}</td>
                      <td>{r.email}</td>
                      <td>
                        <FaRegEye color="gray" title="View Detail" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Realtors;
