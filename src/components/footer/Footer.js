import Container from "react-bootstrap/Container";
import { Col, Row, Section } from "react-bootstrap";
import { ReactComponent as LogoIcon } from "../../assests/images/Logo.svg"
import { ReactComponent as FacebookIcon } from "../../assests/images/facebook.svg"
import { ReactComponent as TwitterIcon } from "../../assests/images/twitter-square.svg"
import { ReactComponent as YoutubeIcon } from "../../assests/images/youtube.svg"
import { ReactComponent as InstagramIcon } from "../../assests/images/instagram.svg"
import "./footer.scss"



const Header = () => (
    <div className="footer">
        <Container className="pt-5">
            <Row className="align-content-center text-center">
                <Col className="text-md-left">
                    <a href="/" className="mb-3 d-block fooLogo"><LogoIcon height="75px" /></a>
                    <ul>
                        <li><a href="/" target="_blank">Hacker</a></li>
                        <li><a href="/" target="_blank">About us</a></li>
                    </ul>
                    <ul className="socialIcon mb-4 mb-md-0">
                        <li><a href="/"><FacebookIcon /></a></li>
                        <li><a href="/"> <InstagramIcon /></a></li>
                        <li><a href="/"> <TwitterIcon /></a></li>
                        <li><a href="/"> <YoutubeIcon /></a></li>
                       
                    </ul>
                </Col>
                <Col className="text-md-left  mb-4 mb-md-0">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="/" target="_blank">Pro labs</a></li>
                        <li><a href="/" target="_blank">Hacking labs</a></li>
                        <li><a href="/" target="_blank">Academy </a></li>
                        <li><a href="/" target="_blank">InfoSec Career</a></li>
                        <li><a href="/" target="_blank">Capture the Flag</a></li>
                    </ul>
                </Col>
                <Col className="text-md-left  mb-4 mb-md-0">  <h3>Company</h3>
                    <ul>
                        <li><a href="/" target="_blank">Contact Us </a></li>
                        <li><a href="/" target="_blank">Careers</a></li>
                        <li><a href="/" target="_blank">Swag</a></li>
                        <li><a href="/" target="_blank">Gift Cards</a></li>
                        <li><a href="/" target="_blank">News</a></li>
                        <li><a href="/" target="_blank">Newsletter</a></li>
                    </ul></Col>
                <Col className="text-md-left"> <h3>Resources</h3>
                    <ul>
                        <li><a href="/" target="_blank">Knowledge Base</a></li>
                        <li><a href="/" target="_blank">Blog</a></li>
                        <li><a href="/" target="_blank">Support</a></li>
                        <li><a href="/" target="_blank">Certificate Validation</a></li>

                    </ul></Col>
            </Row>
          
        </Container>
        <Container fluid className="mt-5">
        <Row className="copyrightLinks pt-4 pb-4 pb-md-5">
                <Col>
                    <ul>
                        <li><span>© 2021</span> HackerEnv</li>
                        <li><a href="/" target="_blank">Acceptable Use Policygs</a></li>
                        <li><a href="/" target="_blank">Terms of Service</a></li>
                        <li><a href="/" target="_blank">Privacy Policy</a></li>
                        <li><a href="/" target="_blank">sCookie Settings</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Header;
