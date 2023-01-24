import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Services.css'
import service1 from '../../assets/services/service1.png'
import service2 from '../../assets/services/service2.png'
import service3 from '../../assets/services/service3.png'
const Service = () => {
  return (
    <div className="mt-5 pt-5">
      <Container>
        <h3>Our Services</h3>
        <Row>
          <Col sm={4}>
            <div className="service">
              <img src={service1} alt="" />
              <h3>Web development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum commodi alias tempore cum, vero iste, aut
                voluptatibus debitis delectus explicabo asperiores architecto
                deserunt facilis id atque officiis. Excepturi, ex voluptatem!
              </p>
              <Button className="text-center" variant="primary">Read More</Button>
            </div>
          </Col>

          <Col sm={4}>
            <div className="service">
              <img src={service2} alt="" />
              <h3>Software Maintenance</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum commodi alias tempore cum, vero iste, aut
                voluptatibus debitis delectus explicabo asperiores architecto
                deserunt facilis id atque officiis. Excepturi, ex voluptatem!
              </p>
                <Button className="btn btn-primary">Read More</Button>
            </div>
          </Col>

          <Col sm={4}>
            <div className="service">
              <img src={service3} alt="" />
              <h3>Software Developemnt</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum commodi alias tempore cum, vero iste, aut
                voluptatibus debitis delectus explicabo asperiores architecto
                deserunt facilis id atque officiis. Excepturi, ex voluptatem!
              </p>
              <Button className="text-center" variant="primary">Read More</Button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Service;
