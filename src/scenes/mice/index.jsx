import './style.css';
import Mice1 from '../../images/mice-1.jpg';
import Mice1_2 from '../../images/mice-1.2.jpg';
import Mice2 from '../../images/mice-2.jpg';
import Mice2_2 from '../../images/mice-2.2.jpg';

const Mice = () => {
  const arr = [
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // },
    // {
    //   image1: "",
    //   alter1: "",
    //   image2: "",
    //   alter2: ""
    // }
  ]

  return (
    <>

      <div className="mice">
        {arr.map((item, idx) => {
          return (
            <div className={`wrapper item-${idx + 1}`}>
              <div className='big-box'>
                <div className='small-box'>
                  <div className='box-1'><img src={Mice1} alt={Mice1} /></div>
                  <div className='box-2'><img src={Mice1_2} /></div>
                  <div className='box-3'><img src={Mice2} /></div>
                  <div className='box-4'><img src={Mice2_2} /></div>
                </div>
              </div>

            </div>)
        })}
      </div>
    </>
  );
};

export default Mice;
