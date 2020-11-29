import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picture from "../images/Heisenberg.jpg";
import {
  faBirthdayCake,
  faHeart,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/CharacterDetail.css";

function CharacterDetail(props) {
  return (
    <div className="container__detail">
      <div className="card mb-3 detail">
        <div className="row no-gutters">
          <div className="col-md-4 cont-img">
            <img src={props.character.img} className="card-img" alt="Character" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title text__content">{props.character.name}</h1>
              <h5 className="card-subtitle text__content"> {props.character.nickname} </h5>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="card mb-3 detail topics">
                      <div className="row no-gutters row__topic">
                        <div className="col-md-1 logo__container">
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="logo"
                            size="3x"
                            alt="Job"
                            fixedWidth
                          />
                        </div>
                        <div className="col-md-2 topics__container">
                          <div className="card-body body__topics">
                            <h6 className="text__content">Jobs</h6>
                            <ul>
                              {props.character.occupation.map((job,id) => {
                                console.log(job);
                                return <li className="text-white">{job}</li>
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card mb-3 detail topics">
                      <div className="row no-gutters row__topic">
                        <div className="col-md-1 logo__container">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="logo"
                            size="3x"
                            alt="Portayed"
                            fixedWidth
                          />
                        </div>
                        <div className="col-md-2">
                          <div className="card-body body__topics">
                            <h4 className="text__content">Portrayed</h4>
                            <h6 className="text__content"> {props.character.portrayed} </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100"></div>
                  <div class="col">
                    <div className="card mb-3 detail topics">
                      <div className="row no-gutters row__topic">
                        <div className="col-md-1 logo__container">
                          <FontAwesomeIcon
                            icon={faBirthdayCake}
                            className="logo"
                            size="3x"
                            alt="Character"
                            fixedWidth
                          />
                        </div>
                        <div className="col-md-2">
                          <div className="card-body body__topics">
                            <h4 className="text__content">Birthday</h4>
                            <h6 className="text__content">{props.character.birthday}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card mb-3 detail topics">
                      <div className="row no-gutters row__topic">
                        <div className="col-md-1 logo__container">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="logo"
                            size="3x"
                            alt="Status"
                          />
                        </div>
                        <div className="col-md-2">
                          <div className="card-body body__topics">
                            <h4 className="text__content">Status</h4>
                            <h6 className="text__content">{props.character.status}</h6>
                          </div>
                        </div>
                      </div>
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
