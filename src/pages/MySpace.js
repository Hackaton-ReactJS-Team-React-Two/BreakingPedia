import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";

import * as charactersActions from "../actions/charactersActions";

import "./styles/Home.css";

import CharacterList from "../components/CharacterList";
import SearchInput from "../components/SearchInput";
import PageLoading from "../components/PageLoading";
import MiniLoader from "../components/MiniLoader";

function MySpace(props) {
  const [favCharacter, setFavCharacter] = useState([]);

  useEffect(() => {
    const result = props.characters.filter((character) => {
      return character.favorite;
    });
    setFavCharacter(result);
  }, []);
  return (
    <Fragment>
      <h3 className="search__title my-3">My Space</h3>
      <SearchInput />
      <div className=" mt-4 mb-5">
        <CharacterList characters={favCharacter} />
      </div>
    </Fragment>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.charactersReducer;
};

export default connect(mapStateToProps, charactersActions)(MySpace);