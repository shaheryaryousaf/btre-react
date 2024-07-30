// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

// Import Libraries
import { Link } from "react-router-dom";

// Import Icons
import { FaEnvelope, FaPhone } from "react-icons/fa";

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

        {/* About Content */}
        <section className="content mt-4">
          <Row>
            <Col lg={9}>
              <h3>We Search For The Perfect Home</h3>
              <p className="subHeading">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                pariatur!
              </p>
              <Image src="/images/about.jpg" fluid />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis esse officia repudiandae ad saepe ex, amet neque
                quod accusamus rem quia magnam magni dolorum facilis ullam
                minima perferendis? Exercitationem at quaerat commodi id libero
                eveniet harum perferendis laborum molestias quia.
              </p>
            </Col>
            <Col lg={3}>
              <Card>
                <Card.Img variant="top" src="/images/realtors/jenny.jpg" />
                <Card.Body>
                  <Card.Title>Seller of the Month</Card.Title>
                  <p className="text-secondary">Jenny Johnson</p>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis nesciunt amet, illo itaque similique repellat.
                    content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* CTA Section */}
        <section className="cta_section mt-4">
          <Row>
            <Col lg={12} className="text-center">
              <h1>We Work For You</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                velit aperiam, unde aliquid at similique!
              </p>
              <Link to="/listings" className="btn btn-md btn-primary">
                View our Featured Listings
              </Link>
            </Col>
          </Row>
        </section>

        {/* Realtors List */}
        <section className="realtors_list">
          <Row>
            <h3 className="text-center">Our Realtors</h3>

            {/* Single Realtor */}
            <Col lg={4} className="text-center">
              <Image src="/images/realtors/jenny.jpg" rounded fluid />
              <h5>Jenny Johnson</h5>
              <div className="info">
                <FaPhone />
                <span>(333)-333-3333</span>
              </div>
              <p className="info">
                <FaEnvelope />
                <span>jenny@btremern.co</span>
              </p>
            </Col>

            {/* Single Realtor */}
            <Col lg={4} className="text-center">
              <Image src="/images/realtors/mark.jpg" rounded fluid />
              <h5>Mark Hudson</h5>
              <div className="info">
                <FaPhone />
                <span>(444)-444-4444</span>
              </div>
              <p className="info">
                <FaEnvelope />
                <span>mark@btremern.co</span>
              </p>
            </Col>

            {/* Single Realtor */}
            <Col lg={4} className="text-center">
              <Image src="/images/realtors/kyle.jpg" rounded fluid />
              <h5>Kyle Brown</h5>
              <div className="info">
                <FaPhone />
                <span>(555)-555-5555</span>
              </div>
              <p className="info">
                <FaEnvelope />
                <span>kyle@btremern.co</span>
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default About;
