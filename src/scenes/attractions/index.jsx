import AttractionCard from './AttractionCard';
const Attractions = () => {

    const [attractionArray, setAttractionArray] = useState([]);

    async function getAttractions() {
        try{
            const response = await fetch('http://localhost:8000/attractions');
            const data = await response.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <div className="about-banner">
                <div className="home_content">
                    <div className="home_title">ATTRACTIONS</div>
                </div>
            </div>


            {/* gallery */}
            <div className="container-fluid p-5 attraction-all-img aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-4 attraction-col">
                        <div className="owl-item-hover">
                            <div className="test_item-hover_img">
                                <div className="test-images">
                                    {attractionArray.map((attraction) => (
                                        <AttractionCard key={attraction?._id} attraction={attraction} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Attractions;