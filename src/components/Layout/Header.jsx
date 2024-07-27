// Import Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Import Icons
import { FaUserPlus, FaSignOutAlt } from "react-icons/fa";

function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">BT</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <Nav.Link href="#action2">Featured Listings</Nav.Link>
            </Nav>
            <div className="auth_links">
              <a href="#" rel="noreferrer" className="link">
                <FaUserPlus />
                <span>Register</span>
              </a>
              <a href="#" rel="noreferrer" className="link">
                <FaSignOutAlt />
                <span>Login</span>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
