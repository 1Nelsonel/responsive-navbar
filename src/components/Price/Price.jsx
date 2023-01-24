import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Check, MarkdownFill, X } from 'react-bootstrap-icons'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { CardColumns } from 'reactstrap'
import './Price.css'

const Price = () => {
  return (
    <div className='mt-5 pt-5'>
        <Container>
            <div className='price-title'>
                <h3>Pricing Table</h3>
            </div>
            <Row>
                <Col sm={4} className="pb-4">
                    <Card>
                        <h3 className='p-2 text-center'>Basic</h3>
                        <CardColumns>
                            <ul className='price-list'>
                            <li>
                                    <Check size='23px' color='aqua' />
                                    Online system
                                </li>
                                <li>
                                    <X size='23px' color='aqua' />
                                    Full access
                                </li>
                                <li>
                                    <Check size='23px' color='aqua' />
                                    Free Access
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     Multiple slider
                                </li>
                                <li>
                                     <X size='23px' color='gray' />
                                     <span className='strike-through'>Free Domain</span>
                                </li>
                                <li>
                                     <X size='23px' color='gray' />
                                     <span className='strike-through'>Support Unlimited</span>
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     Payment online
                                </li>
                                <li>
                                     <X size='23px' color='aqua' />
                                     Cash Back
                                </li>
                                
                            </ul>
                        </CardColumns>
                        <div className='pt-4'>
                            <button className='btn btn-dark center'>SIGN UP NOW</button>
                        </div>
                    </Card>
                </Col>
                <Col sm={4} className="pb-4">
                    <Card>
                        <h3 className='p-2 text-center'>Standard</h3>
                        <CardColumns>
                            <ul className='price-list'>
                                <li>
                                    <Check size='23px' color='aqua' />
                                    Online system
                                </li>
                                <li>
                                    <Check size='23px' color='aqua' />
                                    Full access
                                </li>
                                <li>
                                    <Check size='23px' color='aqua' />
                                    Free Access
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     Multiple slider
                                </li>
                                <li>
                                     <X size='23px' color='gray' />
                                     <span className='strike-through'>Free Domain</span>
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     <span>Support Unlimited</span>
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     Payment online
                                </li>
                                <li>
                                     <X size='23px' color='gray' />
                                     <span className='strike-through'>Cash Back</span>
                                </li>
                            </ul>
                        </CardColumns>
                        <div className='pt-4'>
                            <button className='btn btn-primary center'>SIGN UP NOW</button>
                        </div>
                    </Card>
                </Col>
                <Col sm={4} className="pb-4">
                    <Card>
                        <h3 className='p-2 text-center'>Premier</h3>
                        <CardColumns>
                            <ul className='price-list'>
                            <li>
                                    <Check size='23px' color='aqua' />
                                    Online system
                                </li>
                                <li>
                                    <Check size='23px' color='aqua' />
                                    Full access
                                </li>
                                <li>
                                    <Check size='23px' color='aqua' />
                                    Free Access
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     Multiple slider
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     <span className=''>Free Domain</span>
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     <span>Support Unlimited</span>
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     Payment online
                                </li>
                                <li>
                                     <Check size='23px' color='aqua' />
                                     <span className=''>Cash Back</span>
                                </li>
                            </ul>
                        </CardColumns>
                        <div className='pt-4'>
                            <button className='btn btn-primary center'>SIGN UP NOW</button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Price