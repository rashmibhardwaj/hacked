import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import {ReactComponent as LogoIcon} from "../../assests/images/Logo.svg"
import {ReactComponent as HamburgerMenu} from "../../assests/images/meniicon.svg"
import "./header.scss"



const Header = () => (
  <Container fluid className="bgImage">
    <a href="/" className="mobileMenu"><HamburgerMenu /></a>
    <Row className="mx-0 flex-column align-content-center text-center align-items-center">    
     <LogoIcon />
     <h1 className="title">HackerEnv</h1>
     <h2 className="subheading">The Hackers Environment</h2>     
     <a href="/" target="_blank" className="joinuslink">Join Us</a>
    </Row>
  </Container>
);

export default Header;
