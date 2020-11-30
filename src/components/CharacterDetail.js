import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faHeart,
  faUser,
  faBriefcase,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/CharacterDetail.css";

function CharacterDetail(props) {
  return (
    <div className="container__detail">
      <div className="card mb-3 detail">
        <div className="row no-gutters">
          <div className="col-md-4 cont-img">
            <img
              src={props.character.img}
              className="card-img"
              alt="Character"
            />
          {
          props.character.favorite? 
            <FontAwesomeIcon onClick={props.onChangeFavorite} className="favorite-icon" icon={faStar}/>
          :
            <FontAwesomeIcon onClick={props.onChangeFavorite}  className="favorite-icon" icon={["far", "star"]}/>
          }
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title text__content">
                {props.character.name}
              </h1>
              <h5 className="card-subtitle text__content">
                {" "}
                {props.character.nickname}{" "}
              </h5>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card mb-3 detail topics">
                      <div className="row no-gutters row__topic">
                        <div className="col-md-3 logo__container">
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="logo"
                            size="3x"
                            alt="Job"
                            fixedWidth
                          />
                        </div>
                        <div className="col-md-9 topics__container">
                          <div className="card-body body__topics-jobs">
                            <h4 className="text__content">Jobs</h4>
                            <ul>
                              {props.character.occupation.map((job, id) => {
                                return (
                                  <li key={id}>
                                    <h6 className="text__content-job">{job}</h6>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
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
                        <div className="col-md-11">
                          <div className="card-body body__topics">
                            <h4 className="text__content">Portrayed</h4>
                            <h6 className="text__content">
                              {" "}
                              {props.character.portrayed}{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col">
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
                        <div className="col-md-11">
                          <div className="card-body body__topics">
                            <h4 className="text__content">Birthday</h4>
                            <h6 className="text__content">
                              {props.character.birthday}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
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
                        <div className="col-md-11">
                          <div className="card-body body__topics">
                            <h4 className="text__content">Status</h4>
                            <h6 className="text__content">
                              {props.character.status}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-100"></div>
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
