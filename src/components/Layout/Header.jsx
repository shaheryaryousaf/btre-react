// Import Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Import Icons
import { FaUserPlus, FaSignOutAlt } from "react-icons/fa";

// Import Libraries
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">BT</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/listings">
                <Nav.Link>Featured Listing</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register" className="hide-bg">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login" className="hide-bg">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
            <div className="auth_links hide-sm">
              <Link to="/register" className="link">
                <FaUserPlus />
                <span>Register</span>
              </Link>
              <Link to="/login" className="link">
                <FaSignOutAlt />
                <span>Login</span>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
