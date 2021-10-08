// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { Row, Col, Alert } from "react-bootstrap";
import HeaderComp from "./components/header/Header";
import SecurityAudit from "./components/securityAuditing/SecurityAuditing"
import Partners from "./components/partners/Partners"
import HirePentesters from "./components/hirePentesters/HirePentesters"
import MachinesSlider from "./components/machinesSlider/MachinesSlider"
import FooterComp from "./components/footer/Footer";
import "./App.scss";
import Labs from './components/labs/Labs';

const App = () => (
  <>
    <HeaderComp />
    <Partners />
    <MachinesSlider />
    <HirePentesters />
    <Labs />
    <SecurityAudit />

    <FooterComp />
  </>
);

export default App;
