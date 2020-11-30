import React, { useState, useEffect } from "react";

import { Form, FormControl, Button } from "react-bootstrap";
import { getRandomQuote } from "../api";
import { Link } from "react-router-dom";

import logo from "../images/LogoGreen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

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
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <img src={logo} className="img_logo" />
            </div>
            <div className="col-sm">
              <div className="container list__links">
                <div className="row">
                  <div className="col">
                    <Link to="/">
                      <h6 className="links_name">Home</h6>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/my_space">
                      <h6 className="links_name">MySpace</h6>
                    </Link>
                  </div>
                  <div className="w-100"></div>
                  <div className="col">
                    <Link to="/about_us">
                      <h6 className="links_name">About us</h6>
                    </Link>
                  </div>
                  <div className="col">
                    <Link>
                      <h6 className="links_name"></h6>
                    </Link>
                  </div>
                </div>
              </div>
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
              <Link
                to="https://hackaton-reactjs-team-react-two.github.io/"
                alt="GitHub"
              >
                <FontAwesomeIcon
                  className="img_social fa-lg"
                  className="logo__foot"
                  size="lg"
                  target="_blank"
                  color="white"
                  icon={faGithubSquare}
                />
              </Link>
            </div>
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
