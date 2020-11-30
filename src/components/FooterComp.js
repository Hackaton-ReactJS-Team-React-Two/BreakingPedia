import React, { useState, useEffect } from "react";

import { Form, FormControl, Button } from "react-bootstrap";
import { getRandomQuote } from "../api";
import { Link } from "react-router-dom";

import logo from "../images/LogoGreen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import "./styles/Footer.css";

function FooterComp(props) {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    async function fetchData() {
      try {
        const quote = await getRandomQuote();
        setQuote(quote);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  if (props.error) {
    return <h1>{props.error.message}</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Link to="/BreakingPedia">
                <img src={logo} className="img_logo" alt="Logo" />
              </Link>
            </div>
            <div className="col-sm">
              <div className="container list__links">
                <div className="row">
                  <div className="col">
                    <Link to="/BreakingPedia">
                      <h6 className="links_name">Home</h6>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/BreakingPedia/my_space">
                      <h6 className="links_name">MySpace</h6>
                    </Link>
                  </div>
                  <div className="w-100"></div>
                  <div className="col">
                    <Link to="/BreakingPedia/about_us">
                      <h6 className="links_name">About us</h6>
                    </Link>
                  </div>
                  <div className="col"></div>
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
              <a
                href="https://github.com/Hackaton-ReactJS-Team-React-Two/"
                alt="GitHub"
              >
                <FontAwesomeIcon
                  className="img_social fa-lg"
                  size="lg"
                  target="_blank"
                  color="white"
                  icon={faGithubSquare}
                />
              </a>
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
