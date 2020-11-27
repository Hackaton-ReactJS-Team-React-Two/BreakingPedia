import React, { useState, useEffect } from "react";
import { getQuoteByName } from "../api";

import CharacterDetail from "../components/CharacterDetail";
import PageLoading from "../components/PageLoading";
import Comment from "../components/Comment";
import Quote from "../components/Quote";


function CharacterDetails() {
  const [character, setCharacter] = useState([]);
  const [quotes, setQuotes] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setError(null);
    async function fetchData() {
      try {
        const data = await getQuoteByName("Walter White");
        setQuotes(data);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (load) {
    return <PageLoading />;
  }

  return (
    <div>
      <CharacterDetail />

      <div className="row">
        <div className="col-6">
          <Comment />
        </div>
        <div className="col-6">
          {quotes != null ? <Quote quotes={quotes} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
