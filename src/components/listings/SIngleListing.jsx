/* eslint-disable react/prop-types */

// Import Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Import Libraries
import { Link } from "react-router-dom";

// Import Icons
import {
  FaMapMarkerAlt,
  FaCarAlt,
  FaBed,
  FaBath,
  FaThLarge,
} from "react-icons/fa";

const SingleListing = ({ l }) => {
  return (
    <Col lg={4} className="mb-3">
      <Card className="single_listing">
        <Card.Img variant="top" src={l.featured_image} />
        <Card.Body>
          <Card.Title className="text-center">{l.address}</Card.Title>
          <Card.Text className="text-center">
            <FaMapMarkerAlt color="gray" /> {l.city} {l.state}, {l.zip}
          </Card.Text>
          <Row className="mt-4">
            <Col lg={6} xs={6}>
              <FaThLarge color="gray" /> <span>SQFT: {l.square_foot}</span>
            </Col>
            <Col lg={6} xs={6}>
              <FaCarAlt color="gray" />
              <span>Garage: {l.garage}</span>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={6}>
              <FaBed color="gray" />
              <span>Bedrooms: {l.bedrooms}</span>
            </Col>
            <Col lg={6} xs={6}>
              <FaBath color="gray" />
              <span>Bathrooms: {l.bathrooms}</span>
            </Col>
          </Row>
          <Link
            to="/listings/1"
            className="btn w-100"
            style={{ color: "white" }}
          >
            View Detail
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleListing;
