import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import bgImage from "../assets/blog/page-header.jpg";
import '../components/ServiceDetail/ServiceDetail.css'
import axios from 'axios'
import nl2br from 'react-newline-to-break';


const ServiceDetail = () => {
    const bgBlog = {
        backgroundImage: `url(${bgImage})`,
        width: "100%",
        height: "400px",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectPosition: "50% 50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "brightness(50%)",
    };

    const [service, setService] = useState([])
    const { id } = useParams();

    useEffect(() => {
        async function fetchService() {

            const { data } = await axios.get(`/service/${id}/`)
            setService(data)
        }
        fetchService()

    },)

    const [services, setServices] = useState([])

    useState(() => {
        async function fetchServices() {
            const { data } = await axios.get('/services/')
            setServices(data)
        }

        fetchServices()

    }, [])

    return (
        <div className="mt-5 pt-4">
            <div style={bgBlog} className="darken">
                <div className="bg-image text-center">
                    <h4 className="fw-bolder text-light">
                        <span className="h4-not-darken">
                            My Services <br></br>{service.name}
                        </span>
                    </h4>
                </div>
            </div>
            <Container className='pt-2'>
                <Row>
                    <Col sm={3} className="service-content-left">
                        <div className="pt-4 categories">
                            <h4 className='text-dark fw-bold'>Services</h4>
                            <ul>
                                <Link className='service-link'  to={`/Services/`} >
                                    <li>All</li>
                                </Link>
                                {services.map(service => (
                                    <Link className='service-link' to={`/service/${service.id}/`}>
                                        <li className='service-details'>{service.name}</li>
                                    </Link>
                                ))}

                            </ul>
                        </div>
                    </Col>
                    <Col m={9}>
                        <div>
                          <img className='service-img img-fluid' src={service.image} alt="serviceImage" />
                            <h4 className='text-center fw-bold p-4'>{service.name}</h4>
                        
                            {/* <div dangerouslySetInnerHTML={{__html:service.description}} /> */}
                            <div>{nl2br(service.description)}</div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div >
    )
}

export default ServiceDetail