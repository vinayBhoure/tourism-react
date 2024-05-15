import Header from "../../components/Header";
import './style.css';
const Mice = () => {
  const arr = [
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    },
    {
      image1: "",
      alter1: "",
      image2: "",
      alter2: ""
    }
  ]

  return (
    <div className="mice">
      {arr.map((item, idx) => {
        return (
          <div className={`wrapper item-${idx + 1}`}>
            <div className="area">
              <div className="box-1"><img src={item.image1} alt={item.alter1} /></div>
              <div className="box-2"><img src={item.image2} alt={item.alter2} /></div>
              <div className="box-3"><img src={item.image1} alt={item.alter1} /></div>
              <div className="box-4"><img src={item.image2} alt={item.alter2} /></div>
            </div>

          </div>)
      })}
    </div>
  );
};

export default Mice;
