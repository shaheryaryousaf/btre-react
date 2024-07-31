// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <p className="mb-0"> Copyright © 2024 BT Real Estate </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
