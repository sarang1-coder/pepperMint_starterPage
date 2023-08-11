import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Products() {
  const productInfo = {
    img1: {
      imgSrc:
        "https://images.interestingengineering.com/img/iea/QjOdYrRpGd/eufy-by-anker-boostiq-robovac-11s.jpg",
      info:
        eufy by Anker BoostIQ RoboVac 11S
        
      
    },
    img2: {
      imgSrc:
        "https://www.changiairport.com/content/dam/cacorp/Media-Centre/Resources/Changijourney/Issue46/Mop%20Robot%201.jpeg"
    },
    img3: {
      imgSrc:
        "https://blog-tidychoice.s3.eu-west-2.amazonaws.com/Transition+Files/Images+of+old+blog/5-1/blog+5-1a.jpg"
    },
    img4: {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-0t5p7nu5D9w19nxAF21JE6XNSQ6QTbB4A&usqp=CAU"
    }
  };

  const list = {
    margin: "2rem"
  };
  const list_style = {
    fontSize: "2rem"
  };
  const imgStyle = {
    objectFit: "contain",
    width: "50vw",
    padding: "5rem"
  };

  return (
    <div className="page_adjust" style={{ padding: "2rem" }}>
      <h1>List of Products:</h1>
      <ol style={list}>
        {Object.keys(productInfo).map((key, index) => (
          <li key={index} style={list_style}>
            {index + 1}. {key.info}
            <img style={imgStyle} src={productInfo[key].imgSrc} alt={key} />
          </li>
        ))}
      </ol>

      <Carousel>
        {Object.keys(productInfo).map((key, index) => (
          <div key={index}>
            <img
              src={productInfo[key].imgSrc}
              style={{ width: "10rem" }}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
