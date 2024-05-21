import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ImageCrousal from './ImageCrousal';
import moment from 'moment';

function BookingHotel() {
  
  const hotelid = useParams().id
  const [hotelInfo, setHotelInfo] = useState(null);
  
  const { from, to } = useParams();
  const totalDays = 10; //moment(to).diff(moment(from), 'days');
  const total_amount = totalDays * hotelInfo?.rentperday;

  async function fetchHotel() {
    try {
      const result = await fetch(`http://localhost:8000/hotel/${hotelid}`)
      const res = await result.json()
      if(!res.success){
        alert('Hotel not found');
        window.location.href = '/hotels';
        return;
      }
      setHotelInfo(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchHotel()
  }, [])

  const bookHotel = async () => {

    if (!localStorage.getItem('current-user')) {
      alert('Please login to book vehicle');
      return;
    }
    console.log(hotelInfo)
    const user = JSON.parse(localStorage.getItem('current-user'));
    const bookingData = {
      hotel: hotelInfo,
      user_id: user.data._id,
      total_days: totalDays,
      rentperday: hotelInfo.rentperday,
      total_amount: total_amount,
    }

    try {
      const response = await fetch('http://localhost:8000/booking/hotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });
      const res = await response.json();
      if (res.success) {
        alert('Hotel booked successfully');
        window.location.href = '/hotels';
      }
      if (res.error) {
        alert('Hotel booking failed');
      }

    } catch (err) {
      alert('Hotel booking failed. Error occured: ', err)
    }
  }



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
            <p>Booking From: {from}</p>
            <p>Booking To: {to}</p>
            <hr />
            <p>Hotel Name: {hotelInfo?.hotel_name}</p>
          </div>
          <hr />
          <div style={{ textAlign: 'left' }}>
            <h1>Amount</h1>
            <p>Total days: {totalDays} </p>
            <p>Rent per day: ${hotelInfo?.rentperday} </p>
            <p>Total amount: ${hotelInfo?.rentperday * totalDays }</p>
          </div>
          <div style={{ float: 'right' }}><button className='btn btn-primary' onClick={bookHotel}>Pay Now</button> </div>
        </div>

      </div>
    </div>
  )
}

export default BookingHotel
