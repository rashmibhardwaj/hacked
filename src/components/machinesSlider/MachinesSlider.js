
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { ReactComponent as PrevArrow } from '../../assests/images/arrowLeft.svg'
import { ReactComponent as NextArrow } from '../../assests/images/arrowRight.svg'


import LinuxIcon from '../../assests/images/ic-linux.svg'
import WindowIcon from '../../assests/images/ic-windows.svg'
import "./machinesSlider.scss"

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const MachinesSlider = () => (
  <div className="securityaudit machineSlider pt-5">
    <Container>
      <Row className="align-items-center">
        <Col lg="6">
          <h3 className="title">200+ Machines</h3>
          <p className="subTitle">Where the hacking magic happens.</p>
          <p className="subheading">From scalable difficulty to different operating systems and attack paths, our machine pool is limitlessly diverse. Matching any hacking taste and skill level!</p>
          <a href="/" target="_blank" className="joinuslink">View All</a>
        </Col>
        <Col lg="6" className="text-center">
          <Slider {...settings}>
            <div className="itemSlide">
             <div>
               <img src={LinuxIcon}/>
               <h5>Academy</h5>
               <p>EASY</p>
               </div>
               <div>
               <img src={WindowIcon}/>
               <h5>Sizzle</h5>
               <p>MEDIUM</p>
               </div>
               <div>
               <img src={LinuxIcon}/>
               <h5>Reel2</h5>
               <p>HARD</p>
               </div>
               <div>
               <img src={WindowIcon}/>
               <h5>Irked</h5>
               <p>bvjsh</p>
               </div>
               <div>
               <img src={LinuxIcon}/>
               <h5>Academy</h5>
               <p>EASY</p>
               </div>
               <div>
               <img src={WindowIcon}/>
               <h5>Reel2</h5>
               <p>MEDIUM</p>
               </div>
               <div>
               <img src={LinuxIcon}/>
               <h5>Irked</h5>
               <p>HARD</p>
               </div>  
            </div>
            <div className="itemSlide">
             <div>
               <img src={LinuxIcon}/>
               <h5>Academy</h5>
               <p>EASY</p>
               </div>
               <div>
               <img src={WindowIcon}/>
               <h5>Sizzle</h5>
               <p>MEDIUM</p>
               </div>
               <div>
               <img src={LinuxIcon}/>
               <h5>Reel2</h5>
               <p>HARD</p>
               </div>
               <div>
               <img src={WindowIcon}/>
               <h5>Irked</h5>
               <p>bvjsh</p>
               </div>
               <div>
               <img src={LinuxIcon}/>
               <h5>Academy</h5>
               <p>EASY</p>
               </div>
               <div>
               <img src={WindowIcon}/>
               <h5>Reel2</h5>
               <p>MEDIUM</p>
               </div>
               <div>
               <img src={LinuxIcon}/>
               <h5>Irked</h5>
               <p>HARD</p>
               </div>  
            </div>
           
          </Slider>
        </Col>
      </Row>
    </Container>
  </div>
);

export default MachinesSlider;
