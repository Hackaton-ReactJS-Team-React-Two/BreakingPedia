import React, { Fragment } from "react";
import About from "../components/About";
import BannerContactUs from "../images/BannerContactUs.jpg";
import "./styles/Home.css";

function ContactUs() {
  return (
    <Fragment>
      <div className="HeroHome">
        <img className="HeroHome__image" src={BannerContactUs} alt="" />
        <div className="HeroHome__container">
          <About />
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUs;
