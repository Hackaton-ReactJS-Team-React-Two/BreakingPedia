import React, { Component } from "react";

import "./styles/Quote.css";

function Quote(props) {
  return (
    <div>
      <h1 className="head_Title">Quotes</h1>
      <ul>
        {props.quotes.map((quote) => {
          return <li className="quote">{quote.quote}</li>;
        })}
      </ul>
    </div>
  );
}

export default Quote;
