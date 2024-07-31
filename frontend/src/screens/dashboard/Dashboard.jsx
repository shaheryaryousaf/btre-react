// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

// Import Libraries
import { Link } from "react-router-dom";

// Import Dummy Data
import { listingsData, realtorsData } from "../../dummyData";

const Dashboard = () => {
  return (
    <div className="dashboradPage">
      <Container>
        {/* Page Top */}
        <Row>
          <Col lg={12}>
            <h2>Dashbaord</h2>
            <p>Welcome Back, Shaheryar Yousaf</p>
          </Col>
        </Row>

        {/* Stats */}
        <Row className="stats">
          <Col lg={4}>
            <Card>
              <Card.Body>
                <p className="text-secondary mb-2">Total Listings</p>
                <h3 className="mb-0">123</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <p className="text-secondary mb-2">Total Realtors</p>
                <h3 className="mb-0">123</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <p className="text-secondary mb-2">Total Messages</p>
                <h3 className="mb-0">123</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Record Table */}
        <div className="records_data">
          <Row>
            <Col lg={12}>
              <div className="d-flex align-ietms-center justify-content-between">
                <h4 className="mb-0">Listings</h4>
                <Link to="/dashboard/listings">View All</Link>
              </div>
              <Table className="custom_table mt-3">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Address</th>
                    <th>Asking Price</th>
                    <th>Realtor</th>
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
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>

        {/* Record Table */}
        <div className="records_data mt-4">
          <Row>
            <Col lg={12}>
              <div className="d-flex align-ietms-center justify-content-between">
                <h4 className="mb-0">Realtors</h4>
                <Link to="/dashboard/realtors">View All</Link>
              </div>
              <Table className="custom_table mt-3">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {realtorsData.map((r, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{r.name}</td>
                      <td>{r.phone}</td>
                      <td>{r.email}</td>
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

export default Dashboard;
