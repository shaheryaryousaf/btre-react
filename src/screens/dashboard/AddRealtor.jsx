// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddRealtor = () => {
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
            <Col lg={7}>
              <Form className="custom_form">
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Asking Price</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Square Feet</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bedrooms</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bathrooms</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Garage</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Lot Size</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Realtor</Form.Label>
                  <Form.Select>
                    <option>Jenny Johnson</option>
                    <option>Mark hudson</option>
                    <option>Kyle Brown</option>
                  </Form.Select>
                </Form.Group>
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

export default AddRealtor;
