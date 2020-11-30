import React from "react";

import "./styles/Quote.css";

function Quote(props) {
  return (
    <div>
      <h1 className="head_Title">Quotes</h1>
      <ul>
        {props.quotes.map((quote, id) => {
          return <li key={id} className="quote">{quote.quote}</li>;
        })}
      </ul>
    </div>
  );
}

export default Quote;
