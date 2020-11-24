import React, { useState, useEffect } from "react";
import { getRandomQuote } from "../api";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/LogoGreen.png";
import facebook from "../images/facebook-logo.png";
import instagram from "../images/instagram-logo.png";
import snapchat from "../images/snapcatch-logo.png";
import twitter from "../images/twitter-logo.png";
import youtube from "../images/youtube-logo.png";

import "./styles/Footer.css";

function FooterComp() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setError(null);
    async function fetchData() {
      try {
        const quote = await getRandomQuote();
        setQuote(quote);
        console.log(quote);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <footer>
      <div className="footer">
        <div class="container">
          <div className="row">
            <div className="col-sm">
              <img src={logo} className="img_logo" />
            </div>
            <div className="col-sm">
              <ul className="footer_ul">
                <Link className="link_name" to="/">
                  <li className="footer__li">Home</li>
                </Link>
                <Link className="link_name">
                  <li className="footer__li">MySpace</li>
                </Link>
                <Link className="link_name">
                  <li className="footer__li">About</li>
                </Link>
                <Link className="link_name">
                  <li className="footer__li">Contact us</li>
                </Link>
              </ul>
            </div>
            <div className="col-sm form">
              <h6 className="footer__h6">Get our newsletter</h6>
              <Form inline className="content__form">
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
            <p className="quote">
            “{quote != null ? quote[0].quote : ""}”
            </p>
            <p className="quote">
            {quote != null ? quote[0].author : ""}
            </p>
          </div>
          <div className="card-footer copyright">Copyright 2020</div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComp;
