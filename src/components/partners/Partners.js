/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { ReactComponent as PrevArrow } from '../../assests/images/arrowLeft.svg'
import { ReactComponent as NextArrow } from '../../assests/images/arrowRight.svg'
import { ReactComponent as PImage1 } from '../../assests/images/partners/akerva-logo.svg'
import { ReactComponent as PImage2 } from '../../assests/images/partners/g10.svg'
import { ReactComponent as PImage3 } from '../../assests/images/partners/NLL-Components.svg'
import { ReactComponent as PImage4 } from '../../assests/images/partners/logos_grey-10.svg'

import "./partners.scss"
const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const partners = () => (
  <div className="securityaudit pt-5 pb-5">
    <Container>
      <Row className="align-items-center text-center">
        <Col lg="12">
          <Container className="mb-5" >
            <Slider {...settings}>
              <div>
                <PImage1 />
              </div>
              <div>
                <PImage2 />
              </div>
              <div>
                <PImage3 />
              </div>
              <div>
                <PImage4 />
              </div>
              <div>
                <PImage4 />
              </div>
            </Slider>
          </Container>
          <p className="subheading">Trusting Their Security Training With HackerEnv</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default partners;
