import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import service1 from '../../assets/services/service1.png'
// import service2 from '../../assets/services/service2.png'
// import service3 from '../../assets/services/service3.png'

const Service = ({ service }) => {
  const [services, setServices] = useState([]);

  useState(() => {
    async function fetchServices() {
      const { data } = await axios.get("/services/");
      setServices(data);
    }

    fetchServices();
  }, []);
  return (
    <div className="mt-5 pt-5">
      <Container>
        <h3 className="service-title">Our Services</h3>
        <Row>
          {services.map((service) => (
            <Col key={service.id} sm={4}>
              <div className="service">
                <Link to={`/service/${service.id}/`}>
                  <img src={service.image} alt="" />
                  <h3>{service.name}</h3>
                </Link>
                <p>{service.description.slice(0, 150)}...</p>
                <Link to={`/service/${service.id}/`}>
                  <Button className="text-center" variant="primary">
                    Read More
                  </Button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
