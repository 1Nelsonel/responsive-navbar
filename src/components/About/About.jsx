import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "../../assets/about/about.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container>
        <h2 className="about-title">About NelsonelTech Solutions</h2>
        <Row>
          <Col sm={6}>
            <div>
              <img className="about-image" src={aboutImage} alt="about_image" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="about-right">
              <h4>ABOUT NELSONELTECH SOLUTIONS</h4>
              <p className="about-text">
                We are an Information Technology Company that provides wide
                range of solutions to help your business grow and be gain
                competitive edge in the market. We provide the folloving service
                among many others:
              </p>
              <ul className="about-list">
                <li>Website design and development</li>
                <li>Graphic design</li>
                <li>Web Hosting</li>
                <li>Data science consultancy</li>
                <li> Information system consultancy</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <AboutText /> */}
      </Container>
    </div>
  );
};

export default About;
