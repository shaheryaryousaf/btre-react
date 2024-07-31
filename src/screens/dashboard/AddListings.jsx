// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddListings = () => {
  return (
    <div className="dashboradPage">
      <Container>
        {/* Page Top */}
        <Row>
          <Col lg={12}>
            <div>
              <h2>Add New Listing</h2>
              <p>You can add new listings here</p>
            </div>
          </Col>
        </Row>

        {/* Form */}
        <div className="records_data mt-0">
          <Row>
            <Col lg={12}>
              <Form className="custom_form">
                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Asking Price</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Square Feet</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Garage</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Lot Size</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Realtor</Form.Label>
                    <Form.Select>
                      <option>Jenny Johnson</option>
                      <option>Mark hudson</option>
                      <option>Kyle Brown</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Button className="btn btn-primary btn-md">
                  Save Listings
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AddListings;
