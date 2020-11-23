import React, { useState, useEffect, Fragment } from "react";

import { getCharacters } from "../api";

import CharacterList from "../components/CharacterList";
import SearchInput from "../components/SearchInput";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(true);
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoad(true);
      setError(null);

      try {
        const data = await getCharacters(count, 8);
        setCharacters(characters.concat(data));
        console.log(characters.length + data.length);
        if (characters.length + data.length === 63) {
          setVisible(false);
        }
        setLoad(false);
      } catch (error) {
        setLoad(false);
        setError(error);
      }
    }
    fetchData();
  }, [count]);
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (load) {
    <h1>Loading</h1>;
  }
  return (
    <Fragment>
      <SearchInput />
      <CharacterList characters={characters} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className={`${
          visible ? "d-block" : "d-none"
        } btn btn-dark mx-auto my-5`}
      >
        Load more
      </button>
    </Fragment>
  );
}

export default Home;
