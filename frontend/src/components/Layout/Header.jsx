import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../api/authSlice";
import { useLogoutMutation } from "../../api/userApiSlice";
import { useDispatch } from "react-redux";

// Import Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Import Icons
import { FaUserPlus, FaSignOutAlt } from "react-icons/fa";

// Import Libraries
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const { isLoggedIn, userInfo } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall(undefined).unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

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
              {isLoggedIn ? (
                <span onClick={logoutHandler} className="link" style={{cursor: 'pointer'}}>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </span>
              ) : (
                <Link to="/login" className="link">
                  <FaSignOutAlt />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
