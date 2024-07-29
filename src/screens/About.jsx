// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import Icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Import Libraries
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Page Top */}
      <section className="pageTop">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1>About BT Real Estate</h1>
              <p className="mb-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                pariatur!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-4">
        {/* Breadcrumbs */}
        <Row>
          <Col lg={12}>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &nbsp; &gt; About Us
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
