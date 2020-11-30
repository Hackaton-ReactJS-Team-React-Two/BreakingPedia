import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/CharacterCard.css";

function CharacterCard(props) {
  return (
    <div
      className="CharacterCard col"
    >
      <img
        className="CharacterCard__image"
        src={`https://webpixelapi.com/w/200/h/300/q/120/png/0/c/1/s/${props.character.img.substring(
          7,
          props.character.img.length
        )}`}
        alt={`${props.character.name}`}
      />
      {
        props.character.favorite?
          <FontAwesomeIcon 
            icon={faStar}
            onClick={()=>props.onChangeFavorite(props.character.char_id)}
            className="CharacterCard__favorite"
          />
        :
          ""
      }
      <Link to={`/BreakingPedia/character/${props.character.char_id}`} className={`CharacterCard__container ${props.color}`}>
        <h5 className="CharacterCard__name"> {props.character.name} </h5>
      </Link>
    </div>
  );
}

export default CharacterCard;
