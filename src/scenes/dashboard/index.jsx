import React, { useEffect } from "react";
// import { button } from "/components/ui/button";
import { useState } from "react";
import { Select, Space } from 'antd';
import Form from './HotelForm'
import { Link } from "react-router-dom";




export default function Component() {

    const [dataArr, setDataArr] = useState([])
    const getData = async (e) => {
        if (!e) e = { target: { value: "hotels" } }
        const response = await fetch(`http://localhost:8000/${e.target.value}`);
        const res = await response.json();

        if (res.success === false) {
            alert("Error in fetching data");
            return;
        }
        setDataArr(res.data);
        setCurrentPage(e.target.value);
        console.log(res.data);
    }

    const [currentPage, setCurrentPage] = useState("hotel");
    const deleteData = async (id) => {

        console.log(id, currentPage);
       
        try{
         const response = await fetch(`http://localhost:8000/${currentPage}/delete/${id}`, {
            method: 'DELETE'
            }
        )
        const res = await response.json();
        if (res.success === false) {
            alert("Error in deleting data");
            return
        }
        if(res.success === true){
            alert("Data Deleted Successfully");
            getData();
        }
        }catch(error){
            console.log(error);
        }

    }
    useEffect(() => {
        getData();
    }, []);

    
    const [formValues, setFormValues] = useState("hotel")
    const handleChange = (value) => {
        console.log(value)
        setFormValues(value);
    };


    return (
        <div className="container">
        
            <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                    <button className="btn btn-light text-secondary mr-2" onClick={(e) => getData(e)} value="hotels">Hotels</button>
                    <button className="btn btn-light text-secondary mr-2" onClick={(e) => getData(e)} value="attractions">Attractions</button>
                    <button className="btn btn-light text-secondary mr-2" onClick={(e) => getData(e)} value="vehicles">Vehicles</button>
                    {/* <button className="btn btn-light text-secondary">Total Bookings</button> */}
                </div>
                <div className="d-flex align-items-center">
                    <Select
                        defaultValue="hotel"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: 'hotel', label: 'Hotel' },
                            { value: 'vehicle', label: 'Vehicle' },
                            { value: 'attraction', label: 'Attraction' },
                        ]}
                    />
                    <Link to={`/admin/dashboard/add/${formValues}`}>
                    <button className="btn btn-outline-primary">
                        <PlusIcon className="mr-2" />
                        <span>Add New</span>
                    </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {dataArr.length > 0 ? dataArr.map((data) => {
                    return <>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src={data.photo1 || data.img_url || data.images[0]} alt={`${data.hotel_name || data.name || data.title} Image`} />
                                <div className="card-body">
                                    <h5 className="card-title">{data.hotel_name || data.name || data.title}</h5>
                                    <p className="card-text text-muted">{}{data.title ? "" : "$" + ( data.rentperday || data.rentperhr)+ "/" + (data.rentperday ? "/day" : "/hr")}</p>
                                    {/* <p className="card-text text-muted">${data.description}</p> */}
                                </div>
                                <div className="card-img-overlay d-flex justify-content-end">
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteData(data._id)} style={{height:'40px'}}>
                                        <TrashIcon />
                                        <span className="sr-only" >Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                }) : <h1 className="text-center mb-5">{`No ${currentPage} is avaliable at present moment`}</h1>}
            </div>
        </div>

    );
}

function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

function TrashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    );
}
