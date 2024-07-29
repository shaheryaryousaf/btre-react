// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import Icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <section className="pageTop">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1>User Dashboard</h1>
              <p className="mb-0">Manage your BT Real Estate account</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
