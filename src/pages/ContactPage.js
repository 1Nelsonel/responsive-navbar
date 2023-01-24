import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Envelope, GeoAlt, Phone } from 'react-bootstrap-icons';
import Iframe from 'react-iframe';
import Form from 'react-bootstrap/Form';
import '../components/Contact/Contact.css';

const ContactPage = () => {
  return (
    <div className='mt-4 pt-4 pb-4'>
      <Container className='mt-5 '>
        <div className='text-center p-3 contact-header'>
          <h2 className='fw-bold'>Contact Us</h2>
        </div>
        <Row className='fluid text-center'>
          <Col sm={4}>
            <div className='contact-links'>
            <Phone size={30} color="cyan" />
            <p>Call: <a href='tel:+254798616085'>+254 798 616 085</a></p>
            <p>Sunday-Friday (8am-5pm)</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='contact-links'>
              <Envelope size={30} color="cyan" />
              <p>Email: <a href='mailto:admin@nelsoneltech.co.ke'>admin@nelsoneltech.co.ke</a></p>
              <p>Web: <a href='/' >NelsonelTech</a></p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='contact-links'>
            <GeoAlt size={30} color="cyan" />
            <p>Location: Nairobi</p>
            <p>Nairobi, Kenya</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127643.56204634933!2d36.792321727562104!3d-1.25495216261316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f168358841597%3A0x507290fa55a646be!2sMathare%20Area-4%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sbg!4v1674542205069!5m2!1sen!2sbg" 
            width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type='text' placeholder='Your Name' />
                </Form.Group>
                <Form.Group  className="mb-3">
                  <Form.Control type='email' placeholder='Your Email' />
                </Form.Group>
                <Form.Group  className="mb-3">
                  <Form.Control type='text' placeholder='Subject' />
                </Form.Group>
                <Form.Group  className="mb-3">
                  <Form.Control as="textarea" placeholder='Message' rows={4} />
                </Form.Group>
                <Form.Group  className="mb-3 text-center">
                  <Button>Send Message</Button>
                </Form.Group>
                
              </Form>            
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactPage