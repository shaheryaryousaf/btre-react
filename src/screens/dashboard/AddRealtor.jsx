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
                  <Form.Label>Name</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Facebook Link</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Linkedin Link</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Instagram Link</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Profile Photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Is MVP</Form.Label>
                  <Form.Check type="checkbox" />
                </Form.Group>
                <Button className="btn btn-primary btn-md">Save Realtor</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AddRealtor;
