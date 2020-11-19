import React from 'react'
import {Link} from 'react-router-dom'

import './styles/CharacterCard.css'

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.id}`} className="CharacterCard">
      <img className="CharacterCard__image" src={props.url} alt="character image"/>
      <div className={`CharacterCard__container ${props.color}`}>
        <svg width="30px" height="30px" viewBox="0 0 16 16" className={`CharacterCard__favorite ${props.favorite}`} fill="yellow" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <h5 className="CharacterCard__name"> {props.name} </h5>
        <i className="CharacterCard__quote"> {props.quote} </i>
      </div>
    </Link>  
  )
}

export default CharacterCard