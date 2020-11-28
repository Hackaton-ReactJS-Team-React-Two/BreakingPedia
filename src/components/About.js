import React from "react";

import avatarCarlos from "../images/profile_carlos.jpg";
import avatarFerley from "../images/profile_ferley.jpg";
import avatarTania from "../images/profile_tania.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/AboutUs.css";

function AboutUs() {
  return (
    <div class="About__container">
      <div class="row">
        <div class="col-sm">
          <div className="About">
            <div className="About__header">
              <img className="About__avatar" src={avatarCarlos} alt="avatar" />
              <h3 className="titles">Carlos Rodriguez</h3>
              <h5 className="titles">Montería, CO</h5>
            </div>
            <div className="About__section">
              <p className="description">
                Apasionado por el mundo de la programación de software con
                conocimientos en Ruby, Ruby on Rails, css, html, estudiante de
                React.js.
              </p>
            </div>
            <div className="About__footer">
              <a href="https://github.com/carlosRPDev" target="_blank">
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faGithub}
                  fixedWidth
                />
              </a>
              <a href="https://www.linkedin.com/in/carlos-mario-rodriguez-pastrana-a5a8ab1a7">
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faFacebook}
                  fixedWidth
                />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-mario-rodriguez-pastrana-a5a8ab1a7"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faLinkedinIn}
                  fixedWidth
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div className="About">
            <div className="About__header">
              <img className="About__avatar" src={avatarFerley} alt="avatar" />
              <h3 className="titles">Ferley Arias</h3>
              <h5 className="titles">San Gil, CO</h5>
            </div>
            <div className="About__section">
              <p className="description">
                Desarrollador Frontend con experiencia usando React, Vue, Css ,
                y Html y JavaScript.
              </p>
            </div>
            <div className="About__footer">
              <a href="https://github.com/FerleyArias" target="_blank">
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faGithub}
                  fixedWidth
                />
              </a>
              <a
                href="https://www.facebook.com/ferleyesteban.ariaspulido"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faFacebook}
                  fixedWidth
                />
              </a>
              <a
                href="http://linkedin.com/in/ferley-esteban-arias-pulido-696865171/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faLinkedinIn}
                  fixedWidth
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div className="About">
            <div className="About__header">
              <img className="About__avatar" src={avatarTania} alt="avatar" />
              <h3 className="titles">Tania Pedraza</h3>
              <h5 className="titles">Duitama, CO</h5>
            </div>
            <div className="About__section">
              <p className="description">
                Estudiante de Ingenieria en Sistemas con conocimientos en
                Javascript, CSS, Html, PHP, Java. En proceso con React.
              </p>
            </div>
            <div className="About__footer">
              <a href="https://github.com/TaniaPedrazaG" target="_blank">
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faGithub}
                  fixedWidth
                />
              </a>
              <a
                href="https://www.facebook.com/tania.pedrazagonzalez/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faFacebook}
                  fixedWidth
                />
              </a>
              <a
                href="https://www.linkedin.com/in/tania-pedraza-gonzalez-aa5b09182/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="About__social fa-lg"
                  icon={faLinkedinIn}
                  fixedWidth
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
