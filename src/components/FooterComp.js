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
          <div className="row">
            <p className="quote">“{quote != null ? quote[0].quote : ""}”</p>
            <p className="quote">{quote != null ? quote[0].author : ""}</p>
          </div>
          <div className="card-footer copyright">Copyright 2020</div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComp;
