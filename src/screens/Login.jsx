// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import Libraries
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const submit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="authPage">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <h2>Login to your account</h2>
            <Form className="custom_form">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button className="btn btn-primary btn-md w-100" onClick={submit}>
                Login
              </Button>
            </Form>

            <div className="authLinks">
              <p className="mb-0">
                Do not have an account?{" "}
                <Link to="/register">Create Account</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
