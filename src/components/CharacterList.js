import React, { useState } from "react";

import "./styles/CharacterList.css";

import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <div className="container">
      <div className="characterList">
        {props.characters.map((character, id) => {
          let color;
          if (id % 2 === 0) {
            color = "yellow";
          } else {
            color = "green";
          }
          return (
            <CharacterCard
              onChangeFavorite={()=> {
                props.onChangeFavorite(id) 
              }}
              character={character}
              color={color}
              key={id}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
