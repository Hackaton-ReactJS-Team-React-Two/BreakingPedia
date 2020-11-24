import React from "react";
import picture from "../images/Heisenberg.jpg";
import job from "../images/maletin.png";
import portrayed from "../images/avatar.png";
import birthday from "../images/birthday-card.png";
import status from "../images/me-gusta.png";
import "./styles/CharacterDetail.css";

function CharacterDetail(props) {
  return (
    <div className="card mb-3 detail">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={picture} className="card-img" alt="Character" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Name</h1>
            <h4 className="card-subtitle">Nickname</h4>

            <div className="card mb-3 detail topics">
              <div className="row no-gutters row__topic">
                <div className="col-md-1">
                  <img src={job} className="logo" alt="Character" />
                </div>
                <div className="col-md-2">
                  <div className="card-body body__topics">
                    <h5>Jobs</h5>
                    <h6>Nickname</h6>
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
                    <h5>Portrayed</h5>
                    <h6>Nickname</h6>
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
                    <h5>Birthday</h5>
                    <h6>Nickname</h6>
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
                    <h5>Status</h5>
                    <h6>Nickname</h6>
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
