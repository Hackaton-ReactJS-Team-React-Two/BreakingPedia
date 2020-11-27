import React, { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import SearchInput from "../components/SearchInput";
import './styles/MySpace.css'

function MySpace(props) {
  return (
    <div className="cards__container">
      <h3 className="search__title my-3">My Space</h3>
      <SearchInput />
      <div className=" mt-4 mb-5">
      </div>
    </div>
  );
}

export default MySpace;
