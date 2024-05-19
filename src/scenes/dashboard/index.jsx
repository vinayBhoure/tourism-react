import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import './style.css';
import Image from '../../images/burj-khalifa.jpg';
import { Card, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';


function index() {

    return (
        <div>
        <div className='navigation container'>
            <ul className='nav-list'>
                <li className='nav-item'>Hotels</li>
                <li className='nav-item'>Vehicles</li>
                <li className='nav-item'>Attractions</li>
            </ul>
        </div>
            <Container className='pd-2'>
                <Row>
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Image} style={{ maxHeight: '15rem' }} />
                            <Card.Body>
                                <Card.Title>Hotel Name</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" >Delete</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Image} style={{ maxHeight: '15rem' }} />
                            <Card.Body>
                                <Card.Title>Hotel Name</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" >Delete</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Image} style={{ maxHeight: '15rem' }} />
                            <Card.Body>
                                <Card.Title>Hotel Name</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" >Delete</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Image} style={{ maxHeight: '15rem' }} />
                            <Card.Body>
                                <Card.Title>Hotel Name</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" >Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default index
