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
              character={character}
              color={color}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
