import React from 'react'
import './vehicle.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function BookingScreen() {

    const vehicleId = useParams().transportId;
    const [vehicle, setVehicle] = useState({});

    async function getVehicle() {
        try{
            const response = await fetch(`http://localhost:8000/vehicle/${vehicleId}`);
            const data = await response.json();
            setVehicle(data);
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='m-5'>

            <div className='row justify-content-center mt-5 bs'>
                <div className='col-md-5'>
                    <h1>{vehicle?.name}</h1>
                    <img src={vehicle?.img} className='bigimg' />
                </div>
                <div className='col-md-5'>
                    <div style={{ textAlign: 'left' }}>
                        <h1>Booking Details</h1>
                        <hr />
                        <p>Booking From: </p>
                        <p>Booking To: </p>
                        <hr />
                        <p>Vehicle Name: {vehicle?.name}</p>
                        <p>Vehicle Type: {vehicle?.type}</p>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <h1>Amount</h1>
                        <p>Total hours: </p>
                        <p>Rent per hour: </p>
                        <p>Total amount: </p>
                    </div>
                    <div style={{ float: 'right' }}><button className='btn btn-primary'>Pay Now</button> </div>
                </div>

            </div>
        </div>
    )
}

export default BookingScreen
