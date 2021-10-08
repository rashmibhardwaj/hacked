/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SecurityImage from "../../assests/images/securityhighicon.png"
import "./securityAuditing.scss"



const SecurityAuditing = () => (
    <div className="securityaudit">
  <Container>
    <Row className="align-items-center">    
   <Col lg="6">
   <h3 className="title">Security Auditing</h3>
   <p className="subheading">A cyber security audit is designed to be a comprehensive review and analysis of your business’s IT infrastructure. It identifies threats and vulnerabilities, exposing weaknesses and high-risk practices.</p>
   </Col>
   <Col lg="6" className="text-center">
   <img src={SecurityImage} height="400px" /></Col>
    </Row>
  </Container>
  </div>
);

export default SecurityAuditing;
