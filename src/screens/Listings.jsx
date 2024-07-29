// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import Components
import SingleListing from "../components/listings/SingleListing";

// Import Libraries
import { Link } from "react-router-dom";

// Import Dummy Data
import { listingsData } from "../dummyData.js";

// Import Icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Listings = () => {
  return (
    <>
      <section className="pageTop">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1>Browse Our Properties</h1>
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
              <Link to="/">Home</Link> &nbsp; &gt; Featured Listings
            </div>
          </Col>
        </Row>
      </Container>

      {/* Listings Section */}
      <section className="listings_section">
        <Container className="py-3">
          <Row>
            {listingsData.map((l, index) => (
              <SingleListing key={index} l={l} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Listings;
