import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Container footer-bg pt-3'>
        <Container className='p-3'>
            <Row>
                <Col sm={4}>
                <div className='right'>
                    <h2 className='fw-bolder'><span className='tech'>Nelsonel</span>Tech</h2>
                    <p>Your All times Information Technology provider</p>
                    <ul className='links-left'>
                        <li>
                            <img className='image-icons' src={facebook} alt="" />
                        </li>
                        <li>
                            <img className='image-icons' src={twitter} alt="" />
                        </li>
                        <li>
                            <img className='image-icons' src={instagram} alt="" />
                        </li>
                        <li>
                            <img className='image-icons' src={linkedin} alt="" />
                        </li>
                    </ul>
                </div>
                </Col>
                <Col sm={4}>
                    <h2 className='fw-bolder'>Information</h2>
                    <p>
                        Your All times Information Technology provider.
                    </p>
                    <ul className='links-center'>
                        <li><span className='aqua'>Tel:</span>+254 796 616 085</li>
                        <li><span className='aqua'>Email:</span>admin@nelsoneltech.co.ke</li>
                        <li><span className='aqua'>Email:</span>info@nelsoneltech.co.ke</li>
                        <li><span className='aqua'>Working Hours:</span>8.00am-5.00pm</li>
                    </ul>
                </Col>
                <Col sm={4}>
                    <h2 className='fw-bolder'>Quick Links</h2>
                    <ul className='links-right'>
                        <li className='list fw-bold'>
                            <a href='/'>Home</a>
                        </li>
                        <li className='list fw-bold'>
                            <a href='/About/'>About</a>
                        </li>
                        <li className='list fw-bold'>
                            <a href="/Services/">Services</a>
                        </li>
                        <li className='list fw-bold'>
                            <a href="/Contact/">Contact</a>
                        </li>
                        <li className='list fw-bold'>
                            <a href="/Admin/">Admin</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <div className='footer-bottom'>
            <p>© Copyright 2023 NelsonelTech. All Rights Reserved</p>
            <p>Designed by <a href="/">NelsonelTech Solutions</a> </p>
        </div>
    </div>
  )
}

export default Footer