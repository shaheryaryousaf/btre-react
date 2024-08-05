import { useEffect } from "react";

// Import Redux Stuff
import {
  getListingDetail,
  singleListing,
  singleStatus,
} from "../api/listingApiSlice";
import { useDispatch, useSelector } from "react-redux";

// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

// Import Libraries
import { Link, useParams } from "react-router-dom";
import numeral from "numeral"
import moment from 'moment'

const ListingDetail = () => {
  const { id } = useParams();
  const listingId = id;

  const dispatch = useDispatch();
  const listing = useSelector(singleListing);
  const listingStatus = useSelector(singleStatus);

  useEffect(() => {
    if (listingId) {
      dispatch(getListingDetail(listingId));
    }
  }, [dispatch, listingId]);


  return (
    <>
      {listingStatus === "loading" ? (
        "Loading..."
      ) : (
        <>
          <section className="pageTop">
            <Container>
              <Row>
                <Col lg={12} className="text-center">
                  <h1>{listing.street_address}</h1>
                  <p className="mb-0">
                    {listing.city} {listing.state}, {listing.zip}
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

          {/* Listing Detail */}
          <section className="listing_detail">
            <Container>
              <Row>
                <Col lg={9}>
                  <div className="thumbnail">
                    <Image src={listing.image} fluid />
                  </div>
                  <div className="specs">
                    <Row>
                      <Col lg={6}>
                        <ListGroup>
                          <ListGroup.Item>
                            <span>Asking Price: </span>
                            <span>${numeral(listing.price).format("0,0.00")}</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>Bedrooms: </span>
                            <span>{listing.bedrooms}</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>Bathrooms: </span>
                            <span>{listing.bathrooms}</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>Garage: </span>
                            <span>{listing.garage}</span>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col lg={6}>
                        <ListGroup>
                          <ListGroup.Item>
                            <span>Square Feet: </span>
                            <span>{listing.square_feet}</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>Lot Size: </span>
                            <span>{listing.lot_size} Acres</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>Listing Date: </span>
                            <span>{moment(listing.createdAt).format("DD/MM/YYYY")}</span>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span>Realtor: </span>
                            <span>{listing.realtor?.name}</span>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                  </div>

                  <p>{listing.description}</p>
                </Col>
                <Col lg={3}>
                  <Card>
                    <Card.Img variant="top" src={listing.realtor?.image} />
                    <Card.Body>
                      <Card.Title>Property Realtor</Card.Title>
                      <p className="text-secondary">{listing.realtor?.name}</p>
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
      )}
    </>
  );
};

export default ListingDetail;
