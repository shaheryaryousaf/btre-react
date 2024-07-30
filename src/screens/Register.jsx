// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import Libraries
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="authPage">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <h2>Create new account</h2>
            <Form className="custom_form">
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button className="btn btn-primary btn-md w-100">
                Create Account
              </Button>
            </Form>

            <div className="authLinks">
              <p className="mb-0">
                Already have an account?{" "}
                <Link to="/login">Login here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
