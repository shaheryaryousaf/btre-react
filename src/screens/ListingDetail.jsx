// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

// Import Libraries
import { Link } from "react-router-dom";

// Import Icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ListingDetail = () => {
  return (
    <>
      <section className="pageTop">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1>45 Drivewood Circle</h1>
              <p className="mb-0">Norwood MA, 02062</p>
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

      {/* Listing Detail */}
      <section className="listing_detail">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="thumbnail">
                <Image src="/images/home-1.jpg" fluid />
              </div>
              <div className="specs">
                <Row>
                  <Col lg={6}>
                    <ListGroup>
                      <ListGroup.Item>
                        <span>Asking Price: </span>
                        <span>$490,000</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>Bedrooms: </span>
                        <span>4</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>Bathrooms: </span>
                        <span>5</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>Garage: </span>
                        <span>2</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg={6}>
                    <ListGroup>
                      <ListGroup.Item>
                        <span>Square Feet: </span>
                        <span>3500</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>Lot Size: </span>
                        <span>3 Acres</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>Listing Date: </span>
                        <span>20/07/2024</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>Realtor: </span>
                        <span>Jenny Johnson</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia recusandae esse reiciendis officia omnis non rerum
                dicta cupiditate nostrum molestias deserunt aut minus inventore
                animi atque, consequuntur ad fugit. Possimus culpa blanditiis
                repellendus ipsa similique ullam, natus error dolor harum.
              </p>
            </Col>
            <Col lg={3}>
              <Card>
                <Card.Img variant="top" src="/images/realtors/jenny.jpg" />
                <Card.Body>
                  <Card.Title>Property Realtor</Card.Title>
                  <p className="text-secondary">Jenny Johnson</p>
                  <Button className="btn btn-md btn-primary w-100">
                    Contact Realtor
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ListingDetail;
