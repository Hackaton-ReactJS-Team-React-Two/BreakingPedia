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
    <div className="row container__card">
      <div className="col-6 col-md-4 img__cont">
        <img src={props.character.img} className="card__img" alt="Character" />
        <FontAwesomeIcon
          onClick={props.onChangeFavorite}
          className="favorite-icon"
          size="3x"
          icon={props.character.favorite ? faStar : ["far", "star"]}
        />
      </div>
      <div className="col-md-8 body__cont">
        <div className="col">
          <h1 className="card__text">{props.character.name}</h1>
          <h5 className="card__text">{props.character.nickname}</h5>
        </div>
        <div className="row">
          <div className="col-sm boxes_container">
            <div className="row topic__container">
              <div className="col-5 logo__container">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="logo"
                  size="3x"
                  alt="Job"
                  color="white"
                  fixedWidth
                />
              </div>
              <div className="col card__text">
                <h4>Jobs</h4>
                <ul className="text__content">
                  {props.character.occupation.map((job, id, array) => {
                    return (
                      <li key={id}>
                        <h6>
                          {job}
                          {array.length - 1 === id ? "" : ","}
                        </h6>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm boxes_container">
            <div className="row topic__container">
              <div className="col-5 logo__container">
                <FontAwesomeIcon
                  icon={faUser}
                  className="logo"
                  size="3x"
                  alt="Portayed"
                  color="white"
                  fixedWidth
                />
              </div>
              <div className="col card__text">
                <h4>Portrayed</h4>
                <h6> {props.character.portrayed} </h6>
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-sm boxes_container">
            <div className="row topic__container">
              <div className="col-5 logo__container">
                <FontAwesomeIcon
                  icon={faBirthdayCake}
                  className="logo"
                  size="3x"
                  alt="Character"
                  color="white"
                  fixedWidth
                />
              </div>
              <div className="col card__text">
                <h4>Birthday</h4>
                <h6>{props.character.birthday}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm boxes_container">
            <div className="row topic__container">
              <div className="col-5 logo__container">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="logo"
                  size="3x"
                  color="white"
                  alt="Status"
                />
              </div>
              <div className="col card__text">
                <h4>Status</h4>
                <h6>{props.character.status}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
