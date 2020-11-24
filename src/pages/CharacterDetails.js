import React from "react";
import { getQuoteByName } from "../api";

import CharacterDetail from "../components/CharacterDetail";
import Comment from "../components/Comment";

function CharacterDetails() {
  const [character, setCharacter] = useState([]);
  const [quotes, setQuotes] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setLoad(true);
    setError(null);
    async function fetchData() {
      try {
        const quotes = await getQuoteByName();
        setQuotes(quotes);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        setError(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <CharacterDetail />

      <Comment />
    </div>
  );
}

export default CharacterDetails;
