import React from "react";
import Image from 'next/image'
import { Row, Col } from "react-bootstrap";
import RocketLeft from '../../public/images/footer/Rocket-Left.png';
import RocketRight from '../../public/images/footer/Rocket-Right.png';
import FbLogo from '../../public/images/footer/logos/Facebook.svg'
import InstaLogo from '../../public/images/footer/logos/Instagram.svg'
import LnLogo from '../../public/images/footer/logos/Linked In.svg'
import TwLogo from '../../public/images/footer/logos/Twiter.svg'
import WhLogo from '../../public/images/footer/logos/Whatsapp.svg'
import YtLogo from '../../public/images/footer/logos/Youtube.svg'
import websiteFooterLogo from '../../public/images/logos/Footer logo.svg'

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <Image src={RocketRight} className="img-fluid rocket-left" alt="Rocket" />

      <Row className="justify-content-center">
        <Col xs={12} md={11} lg={9}>
        <Row className="justify-content-center">
        <Col xs={{ span: 9, order: 1 }} lg={3} className="footer_left_section">
          <Row>
            <Col xs={6} md={6} lg={12}>
            <li>About Us</li>
            </Col>
            <Col xs={6} md={6} lg={12}>
            <li>Blog</li>
            </Col>
            <Col xs={6} md={6} lg={12}>
            <li>Jobs</li>
            </Col>
            <Col xs={6} md={6} lg={12}>
            <li>Press</li>
            </Col>
            <Col xs={6} md={6} lg={12}>
            <li>Partners</li>
            </Col>
            <Col xs={6} md={6} lg={12}>
            <li>User Reviews</li>
            </Col>
          </Row>
        </Col>

        <Col xs={{ span: 12, order: 2 }}  lg={{ span: 4, order: 1 }} className="footer-logo-copyright">
          <center>
          <h1><Image className="img-fluid" src={websiteFooterLogo} alt="Footer Logo" /></h1>
          <div className="social-icons">
              <Image className="img-fluid me-2" src={FbLogo} alt="Facebook" />
              <Image className="img-fluid me-2" src={InstaLogo} alt="Instagram" />
              <Image className="img-fluid me-2" src={LnLogo} alt="Linked In" />
              <Image className="img-fluid me-2" src={YtLogo} alt="Youtube" />
              <Image className="img-fluid me-2" src={WhLogo} alt="Whats App" />
              <Image className="img-fluid" src={TwLogo} alt="Twitter" />
          </div>
          <p>Follow Us On</p>
          <p>Copyright © 2023 Logo. All rights reserved.</p>
          </center>
        </Col>

        <Col xs={9}  lg={{ span: 3, order: 2 }} className="text-center">
          <h1 className="mobile_logo"><Image className="img-fluid pt-2 pb-2" src={websiteFooterLogo} alt="Footer Logo" /></h1>
          <div className="input-group mb-3 news-letter">
            <input type="text" className="form-control" placeholder="EMAIL FOR NEWS LETTER" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-warning" type="button" id="button-addon2">Send</button>
          </div>
        </Col>
        
      </Row>
        </Col>
      </Row>
      
      <Image className="img-fluid rocket-right" src={RocketLeft} alt="Rocket" />
    </footer>
  );
};

export default Footer;
