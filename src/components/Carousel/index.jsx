import { useEffect, useState } from "react";
import "./index.css";
import Classification from "../Classification";

function Carousel() {
  const images = [
    "https://res.vmallres.com/cmscdn/CN/2022-12/a0139632c8c64411993f49773b80e87e.png",
    "https://res.vmallres.com/cmscdn/CN/2022-12/358c769e47004ce9aeb52ac27a02afae.jpg",
    "https://res.vmallres.com//uomcdn/CN/ams/202212/A9D7DC60ADD0B6B0B0E0398462822645.png",
    "https://res.vmallres.com//uomcdn/CN/ams/202212/A73E9C6400E9CCF956643F93487CD2F5.jpg",
    "https://res.vmallres.com/cmscdn/CN/2022-12/589e91f3325c4beb9bc3215012708ea7.jpg",
    "https://res.vmallres.com//uomcdn/CN/ams/202212/F45A9130ADAEC5BA35B41B220E4C34DB.jpg",
    "https://res.vmallres.com//uomcdn/CN/ams/202212/F25950346FD2187BF610316706453ED6.jpg",
    "https://res.vmallres.com/cmscdn/CN/2022-12/a85def700a4b476db6a889ffb70f890d.jpg",
    "https://res.vmallres.com/cmscdn/CN/2022-12/ecf41ec9d19d4cdea6f351fb1b10be06.jpg",
  ];
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (count === images.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [count, images.length]);

  useEffect(() => {
    if (count === 0) {
      setLeft(0);
    } else {
      setLeft(-count * 100);
    }
  }, [count, images.length]);

  return (
    <div className="box">
      <Classification />
      <ul className="imgs" style={{ marginLeft: `${left}%` }}>
        {images.map((img) => {
          return (
            <li className="item" key={img}>
              <img src={img} alt={img} />
            </li>
          );
        })}
      </ul>
      <div className={"select_images"}>
        {images.map((_, index) => {
          if (index === count) {
            return (
              <div
                key={index}
                className={"circle"}
                style={{ backgroundColor: "black" }}
              />
            );
          }
          return (
            <div
              key={index}
              className={"circle"}
              onClick={() => setCount(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
