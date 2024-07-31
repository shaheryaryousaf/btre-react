// Import Booptstrap
import Container from "react-bootstrap/Container";

// Import Icons
import {
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topBar">
      <Container>
        <div className="infos">
          <div className="info">
            <FaPhoneAlt color="gray" size={14} />
            <span>
              <a href="tel:(617)-555-5555" rel="noreferrer">
                (617)-555-5555
              </a>
            </span>
          </div>
          <div className="info">
            <FaEnvelopeOpen color="gray" size={14} />
            <span>
              <a href="mailto:contact@btreproperties.com" rel="noreferrer">
                contact@btreproperties.com
              </a>
            </span>
          </div>
          <div className="info">
            <ul>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaTwitter size={14} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaFacebookSquare size={14} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaLinkedin size={14} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaInstagram size={14} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaPinterestP size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
