import React from "react";
import avatar from "../images/BannerContactUs.jpg";
import github from "../images/038-github.png";
import facebook from "../images/021-facebook.png";
import linkedin from "../images/045-linkedin.png";
import "./styles/AboutUs.css";

function AboutUs(props) {
  return (
    <div className="About">
      <div className="About__header">
        <img className="About__avatar" src={avatar} alt="avatar" />
        <h3>Name</h3>
        <h5>Skill</h5>
      </div>
      <div className="About__section">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          necessitatibus consequuntur vitae praesentium
        </p>
      </div>
      <div className="About__footer">
        <img className="About__social" src={github} alt="Logo Github" />
        <img className="About__social" src={facebook} alt="Logo facebook" />
        <img className="About__social" src={linkedin} alt="Logo Linkedin" />
      </div>
    </div>
  );
}

export default AboutUs;
