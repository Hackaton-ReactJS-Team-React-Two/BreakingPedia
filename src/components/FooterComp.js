import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/LogoGreen.png";
import facebook from "../images/facebook-logo.png";
import instagram from "../images/instagram-logo.png";
import snapchat from "../images/snapcatch-logo.png";
import twitter from "../images/twitter-logo.png";
import youtube from "../images/youtube-logo.png";

import "./styles/Footer.css";

function FooterComp(props) {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <div className="col-sm">
            <img src={logo} className="img_logo" alt="Logo" />
          </div>
          <div className="col-sm">
            <ul>
              <Link className="link_name">
                <li>Home</li>
              </Link>
              <Link className="link_name">
                <li>MySpace</li>
              </Link>
              <Link className="link_name">
                <li>About</li>
              </Link>
              <Link className="link_name">
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
          <div className="col-sm form">
            <h6 className="text-light">Get our newsletter</h6>
            <Form inline>
              <FormControl
                type="text"
                placeholder="email"
                className="mr-sm-2 email__box"
              />
              <Button className="button_subscribe" type="submit">
                Subscribe
              </Button>
            </Form>
            <img className="img_social" src={facebook} alt="facebook" />
            <img className="img_social" src={instagram} alt="instagram" />
            <img className="img_social" src={snapchat} alt="snapchat" />
            <img className="img_social" src={twitter} alt="twitter" />
            <img className="img_social" src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm quote">
            Consequences. "I told you Skyler, I warned you for a solid year: You
            cross me, and there will be consequences."
          </div>
        </div>
        <div className="card-footer copyright">Copyright 2020</div>
      </div>
    </footer>
  );
}

export default FooterComp;
