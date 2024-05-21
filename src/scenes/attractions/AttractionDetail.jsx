import React, { useState } from 'react'
import './style.css';
import ScrollAnimation from "../../components/ScrollAnimation";
import burjKhalifa from "../../images/airport-assitant.jpg"
import { FaCalendarAlt } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { LuPrinter } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";

function AttractionDetail() {

    const icon = [
        { icon:<FaCalendarAlt color="orange"  />,
        title: "Availability: Daily" },
        {
            icon:<GiSandsOfTime />,
            alt: "Duration:5 - 6 Hours (Approx)",
            title: "Duration:5 - 6 Hours (Approx)",
        },
        {
            icon:<GiSandsOfTime />,
            alt: "Starting Time : 14:30:00",
            title: "Starting Time : 14:30:00",
        },
        { icon:<FaBusAlt />,
          alt: "Pick up & Drop Back", 
        title: "Pick up & Drop Back" },
        {
            icon:<FcCancel />,
            alt: "Free Cancellation 24 hours Prior",
            title: "Free Cancellation 24 hours Prior",
        },
        {
            icon:<LuPrinter />,
            alt: "Printed Voucher Accepted",
            title: "Printed Voucher Acceptedily",
        },
        { icon:<IoLanguage />, alt: "English / Arabic", title: "English / Arabic" },
        { icon:<AiFillThunderbolt />, alt: "Instant Confirmation", title: "Instant Confirmation" },
    ];

    const List = ({ list }) => {
        return (
            <li className="mb-2">
                <span style={{ color: "#EE7746", fontWeight: "bolder" }} className="">
                    {">> "}
                </span>{" "}
                {list}
            </li>
        );
    };

    const [bigImg, setBigImg] = useState(burjKhalifa);
    const changeImgHandler = (img) => {
        setBigImg(img);
    }


    return (
        <div className='mb-5'>
            <div className='big-h'>
                <h1>Burj khalifa</h1>
            </div>


            <div className="w-75 m-auto ">
                <div className="row mb-5 main mt-5">
                    <div className="col-md-6 col-sm-12">
                        <div style={{ width: "80%" }} className="m-auto mt-5 mb-5">
                            <div className="m-auto big-img">
                                <img
                                    className="w-100 h-100"
                                    src={bigImg}
                                    alt="image"
                                ></img>

                            </div>
                            <div className="d-flex small-img mt-2">
                                <img className="m-2 bg-danger" src={burjKhalifa} alt="image1" />
                                <img className="m-2 bg-danger" src={burjKhalifa} alt="image2" />
                                <img className="m-2 bg-danger" src={burjKhalifa} alt="image3" />
                                <img className="m-2 bg-danger" src={burjKhalifa} alt="image4" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ width: "80%" }} className="m-auto sm:text-center">
                            <h2 style={{ color: "#EE7746" }} className="font-weight-bold">
                                Burj Khalifa
                            </h2>
                            <p>
                                A Burj Khalifa tour is a popular attraction for visitors to Dubai.
                                The Burj Khalifa is the tallest building in the world and offers
                                breathtaking views of the city from its observation deck located
                                on the 124th floor.
                            </p>
                            <p>
                                During a Burj Khalifa tour, you can expect to be transported to
                                the top of the building in high-speed elevators and enjoy
                                panoramic views of Dubai from the observation deck. The deck
                                features floor-to-ceiling windows that provide a 360-degree view
                                of the city, and you can take in the sights of Dubai's skyline,
                                desert, and ocean from up high.
                            </p>
                            <p>
                                In addition to the observation deck, a Burj Khalifa tour may also
                                include access to the building's other attractions, such as it's
                                At the Top Sky lounge on the 148th floor and its signature
                                restaurants, such as Atmosphere, which is located on the 122nd
                                floor.
                            </p>
                        </div>
                    </div>
                </div>

                <ScrollAnimation>
                    <div className="row">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">BURJ KHALIFA</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="boxs d-flex flex-wrap mb-5 justify-content-center ">
                        {icon.map((x, index) => (
                            <div
                                key={index}
                                style={{ width: "230px", height: "150px" }}
                                className="box hoverStyle shadow px-3 m-3 align-content-center align-self-center text-center option-box"
                            >
                                {x.icon}
                                <p>{x.title}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">INCLUSIONS</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row  text-black">
                        <div className="col-md-6">
                            
                            <h3 style={{ fontWeight: "bolder" }}>
                                For Levels 148 + 125 + 124 :
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <span
                                        style={{ color: "#EE7746", fontWeight: "bolder" }}
                                        className=""
                                    >
                                        {" "}
                                    </span>{" "}
                                    Enjoy a personalized tour, guided by a Guest Ambassador.
                                </li>
                                <li className="mb-2">
                                    <span
                                        style={{ color: "#EE7746", fontWeight: "bolder" }}
                                        className=""
                                    >
                                        {" "}
                                    </span>{" "}
                                    Step out onto the world’s highest observation deck with an
                                    outdoor terrace at 555 meters.
                                </li>
                                <li className="mb-2">
                                    <span
                                        style={{ color: "#EE7746", fontWeight: "bolder" }}
                                        className=""
                                    >
                                        {" "}
                                    </span>{" "}
                                    Refresh yourself with signature refreshments at SKY lounge.
                                </li>
                                <li className="mb-2">
                                    <span
                                        style={{ color: "#EE7746", fontWeight: "bolder" }}
                                        className=""
                                    >
                                        {" "}
                                    </span>{" "}
                                    Explore Dubai’s most famous landmarks with a unique interactive
                                    experience, using motion senses.
                                </li>
                                <li className="mb-2">
                                    <span
                                        style={{ color: "#EE7746", fontWeight: "bolder" }}
                                        className=""
                                    >
                                        {" "}
                                    </span>{" "}
                                    Continue your journey to levels 125 and 124.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className="mb-2">
                                    <span
                                        style={{ color: "#EE7746", fontWeight: "bolder" }}
                                        className=""
                                    >
                                        {" "}
                                    </span>{" "}
                                    Continue your journey to levels 125 and 124.
                                </li>
                            </ul>
                            <h3 style={{ fontWeight: "bolder" }}>For Levels 125 +124 :</h3>
                            <ul>
                                <li className="mb-2">
                                    <span
                                        style={{ color: "#EE7746", fontWeight: "bolder" }}
                                        className=""
                                    >
                                        {" "}
                                    </span>{" "}
                                    Be thrilled by the world’s fastest double deck elevators,
                                    cruising at 10 m/s.
                                </li>
                            </ul>
                            <ul>
                                <List list="Take a closer look at the world below through avant-garde, high powered, telescopes." />
                                <List list="Level 125 offers a spacious deck tastefully decorated in Arabic mashrabiya for stunning 360-degree views." />
                                <List list="Set off on a virtual reality experience to the pinnacle of Burj Khalifa." />
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">WHY SHOULD I GO FOR THIS?</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <ul>
                                <List list="It’s the best way to take in the world’s tallest building up close." />
                                <List list="Select from convenient ticket options." />
                                <List list="Standard ticket offers to the At the Top Observation Deck at 124th floor and 125th floors." />
                                <List list="Choose Sky Tickets to enjoy access to all of its observation decks including the world’s highest observation deck at 148th level." />
                                <List list="Watch a multimedia presentation that journeys back to Dubai’s quaint past and also lets you experience this massive structure’s diverse construction phases." />
                                <List list="Take in the swiftest ever elevator ride as you get transported to the observation deck in less than a minute." />
                                <List list="Zoom in the cutting-edge telescopes for a closer view of Dubai landmarks." />
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <List list="Scope out through the floor-to-ceiling glass windows to enjoy panoramic views over Dubai’s skyline, desert and ocean." />
                                <List list="Chance to step out to its outdoor terrace (only if weather permits) to relish unparalleled sights from a stunning viewpoint." />
                                <List list="Enjoy Guest Ambassador’s services, along with access to SKY lounge (but this is only applicable for Sky tickets). With your Burj Khalifa Sky tickets, you will be able to gain convenient access to the deck. For a more wholesome experience, you can book the combo of Burj Khalifa and Aquarium Tickets or choose to dive into the history by adding Etihad Museum Tickets to it. For brand-new experiences, sign up for the Museum of the Future tour or get your tickets to Ain Dubai, Infinity Des Lumières and the View at the Palm, among others." />
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">THE DUBAI TOURS ADVANTAGE</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <ul>
                                <List list="Authorized Ticket Seller - Burj Khalifa Dubai" />
                                <List list="Convenient booking options with instant confirmation" />
                                <List list="Secured & Trusted Payment Option" />
                                <List list="Experience of selling over 3 lacs tickets" />
                                <List list="Local expert in the UAE" />
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <List list="Customized transfer choices with our own line-up of vehicles" />
                                <List list="Exclusive 24/7 client support helpline" />
                                <List list="Smartphone tickets accepted" />
                                <List list="Flexible cancellation policy" />
                                <List list="Special promotions and deals made available from time to time" />
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">IMPORTANT INFORMATION</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <ul>
                                <List list="Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance." />
                                <List list="The Booking Confirmation is valid only for the selected date and time." />
                                <List list="Shared transfers are only provided from centrally located hotels and residences in Dubai city. (Deira, Bur Dubai, Sheikh Zayed, Marina)" />
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <List list="Transfers (if selected)" />
                                <List list="The Burj Khalifa is open every day for 24 Hours. (Guests are requested to reach the venue 15 min prior to the selected time slot.)" />
                                <List list="Important note: At the Top + The Cafe , includes only 1 soft drink or 1 pastry, (Hot beverage is not included)" />
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">BOOKING POLICY</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <h3 style={{ fontWeight: "bolder" }}>Cancellation Policy -</h3>
                            <ul>
                                <List list="For all cancellations made 24 hours prior to the tour departure time NO charges will be applicable." />
                                <List list="If cancellation made within 24 hours of your tour departure time 100% charges will be applicable." />
                                <List list="If eligible for a refund your amount will be returned back to you within 7 working days." />
                            </ul>
                            <h3 style={{ fontWeight: "bolder" }}>Child Policy -</h3>
                            <ul>
                                <List list="Children under 4 years will be considered infants and entry will be free of cost." />
                                <List list="Children between ages of 4 to 12 will be considered as children and charged a child rate." />
                                <List list="Children above age 12 will be considered an adult and charged the adult rate." />
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src={burjKhalifa} style={{height:'25rem'}} alt="image" />
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AttractionDetail