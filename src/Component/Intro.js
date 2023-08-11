import React from "react";
import robot_Img from "../assets/img/robots.png";
import "../assets/css/intro.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Intro() {
  const ulStyle = {
    padding: "1rem"
  };
  return (
    <section id="intro">
      <div className="intrContent">
        <span className="content">
          <span className="heading">
            Welcome to World of Robotics
            <br />
          </span>
        </span>
        <span className="info1">
          We provide Wide Range of Solutions for Robots
        </span>
        <span className="info">
          <ul style={ulStyle}>
            <li>
              Company is pioneering the future of inspection at scale, providing
              products and solutions that are enabling autonomous robots to
              capture and analyze data at an unprecedented level.
            </li>
            <li>
              Its industry-leading technology is pushing the boundaries of the
              possible, going beyond the status quo to deliver billions of
              dollars in risk reduction for some of the world’s biggest
              companies.
            </li>
            <li>
              We’ve curated the brightest minds in autonomy who work every day
              to help protect the world’s most valuable assets and resources,
              delivering the insights needed to inform preventative maintenance
              programs, exceed health and safety targets, and significantly
              reduce CO₂.
            </li>
          </ul>
          <br />
        </span>
      </div>
      <img
        className="img1"
        style={{ objectFit: "contain", width: "50vw", padding: "2rem" }}
        src="https://th.bing.com/th/id/R.06539dde957066676773c43d379e3306?rik=rNS4sFiH04yiMA&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2013%2f11%2frobot-wallpaper-62.jpg&ehk=4UXwVXi%2fCbUoMiQo0osqcSyw7l7FwKLWCHdlhWaTnA0%3d&risl=&pid=ImgRaw&r=0"
      />
      <img src={robot_Img} alt="robotImg" className="robot_img" />
    </section>
  );
}
