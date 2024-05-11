import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import ImageCrousal from './ImageCrousal';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookHotel() {

  const [hotelInfo, setHotelInfo] = useState(null);

  const hotelid = useParams().id
  async function fetchHotel() {
    try {
      const result = await fetch(`http://localhost:8000/hotel/${hotelid}`)
      const res = await result.json()
      setHotelInfo(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchHotel()
  }, [])
  return (
    <div>
      <Container>
      <div className='p-3 border rounded-5 mt-4 '>
        <ImageCrousal photos={[hotelInfo?.photo1, hotelInfo?.photo2, hotelInfo?.photo3, hotelInfo?.photo4, hotelInfo?.photo5]} />
      </div>
        <Row className='mt-4'>
          <Col sm={12} lg={8} md={6}>
            <div className="border-bottom">
              <p className='fs-3 mb-0'>{hotelInfo?.hotel_name}</p>
              <p className='fw-light'><span>{hotelInfo?.city}</span>,<span>{hotelInfo?.state}</span>,<span>{hotelInfo?.country}</span></p>
            </div>
            <div className='mt-2'>
              <h3>Overview</h3>
              <p className=''>{hotelInfo?.overview}</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
          <div className='my-4'>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                  <p className='m-0'>
                    <span className='fw-bold'>Stars:</span> {hotelInfo?.star_rating}
                  </p>
                  <p className='m-0'>
                    <span className='fw-bold'>Average Rating:</span> {hotelInfo?.rating_average}
                  </p>
                </Card.Text>
                <Link to={hotelInfo?.url} target='_blank'><Button variant="primary">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BookHotel
