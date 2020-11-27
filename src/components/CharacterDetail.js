import React, { useState } from "react";
import { Link } from "react-router-dom";
import picture from "../images/Heisenberg.jpg";
import job from "../images/maletin.png";
import portrayed from "../images/avatar.png";
import birthday from "../images/birthday-card.png";
import status from "../images/me-gusta.png";
import "./styles/CharacterDetail.css";

function CharacterDetail(props) {
  return (
    <div className="container__detail">
      <div className="card mb-3 detail">
        <div className="row no-gutters">
          <div className="col-md-4 cont-img">
            <img src={picture} className="card-img" alt="Character" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title text__content">Name
              </h1>
              <h4 className="card-subtitle text__content">Nickname</h4>
              <div className="card mb-3 detail topics">
                <div className="row no-gutters row__topic">
                  <div className="col-md-1">
                    <img src={job} className="logo" alt="Character" />
                  </div>
                  <div className="col-md-2">
                    <div className="card-body body__topics">
                      <h5 className="text__content">Jobs</h5>
                      <h6 className="text__content">Nickname</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 detail topics">
                <div className="row no-gutters row__topic">
                  <div className="col-md-1">
                    <img src={portrayed} className="logo" alt="Character" />
                  </div>
                  <div className="col-md-2">
                    <div className="card-body body__topics">
                      <h5 className="text__content">Portrayed</h5>
                      <h6 className="text__content">Nickname</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 detail topics">
                <div className="row no-gutters row__topic">
                  <div className="col-md-1">
                    <img src={birthday} className="logo" alt="Character" />
                  </div>
                  <div className="col-md-2">
                    <div className="card-body body__topics">
                      <h5 className="text__content">Birthday</h5>
                      <h6 className="text__content">Nickname</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 detail topics">
                <div className="row no-gutters row__topic">
                  <div className="col-md-1">
                    <img src={status} className="logo" alt="Character" />
                  </div>
                  <div className="col-md-2">
                    <div className="card-body body__topics">
                      <h5 className="text__content">Status</h5>
                      <h6 className="text__content">Nickname</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
