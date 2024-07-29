// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import Components
import SingleListing from "../components/listings/SingleListing.jsx";

// Import Icons
import { FaComment, FaHome, FaBriefcase } from "react-icons/fa";

// Import Dummy Data
import { listingsData } from "../dummyData.js";

const Home = () => {
  return (
    <>
      {/* Search Form */}
      <section className="search_form">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="search_form_section">
                <div className="content">
                  <h1> Property Searching Just Got So Easy </h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae quas, asperiores eveniet vel nostrum magnam
                    voluptatum tempore! Consectetur, id commodi!
                  </p>
                </div>
                <Form>
                  <Row>
                    <Col lg={4}>
                      <Form.Control placeholder="Keyword (pool, garage, etc)" />
                    </Col>
                    <Col lg={4}>
                      <Form.Control placeholder="City" />
                    </Col>
                    <Col lg={4}>
                      <Form.Select>
                        <option disabled>-- Select State --</option>
                        <option value="All">All</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Form.Select>
                        <option disabled>-- Select Bedrooms --</option>
                        <option>All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Form.Select>
                    </Col>
                    <Col lg={6}>
                      <Form.Select>
                        <option>Max Price (Any)</option>
                        <option value="100000">$100,000</option>
                        <option value="200000">$200,000</option>
                        <option value="300000">$300,000</option>
                        <option value="400000">$400,000</option>
                        <option value="500000">$500,000</option>
                        <option value="600000">$600,000</option>
                        <option value="700000">$700,000</option>
                        <option value="800000">$800,000</option>
                        <option value="900000">$900,000</option>
                        <option value="1000000">$1M+</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Button type="btn" className="w-100">
                    Search
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Listings Section */}
      <section className="listings_section">
        <Container className="py-5">
          <Row className="mb-3">
            <Col lg={12} className="text-center">
              <h2>Latest Listings</h2>
            </Col>
          </Row>
          <Row>
            {listingsData.map((l, index) => (
              <SingleListing key={index} l={l} />
            ))}
          </Row>
        </Container>
      </section>

      {/* Bottom Infos */}
      <section className="bottom_infos">
        <Container>
          <Row>
            <Col lg={4}>
              <FaComment size={56} />
              <h3>Consulting Services</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.
              </p>
            </Col>
            <Col lg={4}>
              <FaHome size={56} />
              <h3>Propery Management</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.
              </p>
            </Col>
            <Col lg={4}>
              <FaBriefcase size={56} />
              <h3>Renting & Selling</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
