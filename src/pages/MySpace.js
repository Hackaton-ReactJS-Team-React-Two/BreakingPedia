import React, { useState, useEffect, Fragment, useMemo } from "react";
import { connect } from "react-redux";

import * as charactersActions from "../actions/charactersActions";

import "./styles/Home.css";

import CharacterList from "../components/CharacterList";
import SearchInput from "../components/SearchInput";

function SearchFavoriteCharacters(characters) {
  const [query, setQuery] = React.useState("");
  const [
    filteredFavoriteCharacters,
    setFilteredFavoriteCharacters,
  ] = React.useState(characters);
  useMemo(() => {
    const lowerQuery = query.toLowerCase();
    const result = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(lowerQuery) ||
        character.nickname.toLowerCase().includes(lowerQuery)
      );
    });
    setFilteredFavoriteCharacters(result);
  }, [characters, query]);

  return { query, setQuery, filteredFavoriteCharacters };
}

function MySpace(props) {
  const [favCharacters, setFavCharacters] = useState([]);
  const {
    query,
    setQuery,
    filteredFavoriteCharacters,
  } = SearchFavoriteCharacters(favCharacters);

  useEffect(() => {
    const result = props.characters.filter((character) => {
      return character.favorite;
    });
    setFavCharacters(result);
  }, []);

  const handleChangeFavorite = (id) => {
    const index = props.characters.findIndex(
      (character) => character.char_id === id
    );
    const character = props.characters[index];
    character.favorite = !character.favorite;
    props.update(character, index);
    const favIndex = favCharacters.findIndex(
      (character) => character.char_id === id
    );
    const updateCharacters = [...favCharacters]
    updateCharacters.splice(favIndex,1)
    setFavCharacters(updateCharacters)
  };

  return (
    <Fragment>
      <h3 className="search__title my-3">My Space</h3>
      <SearchInput
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className=" mt-4 mb-5">
        <CharacterList
          onChangeFavorite={handleChangeFavorite}
          characters={filteredFavoriteCharacters}
        />
      </div>
    </Fragment>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.charactersReducer;
};

export default connect(mapStateToProps, charactersActions)(MySpace);
