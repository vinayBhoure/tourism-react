import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import ImageCrousal from './ImageCrousal';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookingHotel() {

  const hotelid = useParams().id
  const [hotelInfo, setHotelInfo] = useState(null);

  async function fetchHotel() {
    try {
      const result = await fetch(`http://localhost:8000/hotel/${hotelid}`)
      const res = await result.json()
      setHotelInfo(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchHotel()
  }, [])
  return (

    <div className='m-5'>

      <div className='row justify-content-center mt-5 bs'>
        <div className='col-md-5'>
          <h1 className='fs-3 mb-0'>{hotelInfo?.hotel_name}</h1>
          <p className='fw-light '>{hotelInfo?.city + ", " + hotelInfo?.state + ", " + hotelInfo?.country}</p>
          <hr />
          <ImageCrousal photos={[hotelInfo?.photo1, hotelInfo?.photo2, hotelInfo?.photo3, hotelInfo?.photo4, hotelInfo?.photo5]} />
        </div>
        <div className='col-md-5'>
          <div style={{ textAlign: 'left' }}>
            <h1>Booking Details</h1>
            <hr />
            <p>Booking From: </p>
            <p>Booking To: </p>
            <hr />
            <p>Hotel Name: {hotelInfo?.hotel_name}</p>
            <p>Hotel Type: {hotelInfo?.type}</p>
          </div>
          <hr />
          <div style={{ textAlign: 'left' }}>
            <h1>Amount</h1>
            <p>Total days: </p>
            <p>Rent per day: </p>
            <p>Total amount: </p>
          </div>
          <div style={{ float: 'right' }}><button className='btn btn-primary'>Pay Now</button> </div>
        </div>

      </div>
    </div>
  )
}

export default BookingHotel
