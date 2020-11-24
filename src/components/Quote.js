import React, { Component } from "react";

function Quote(props) {
  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {props.quotes.map((quote) => {
          return <li>{quote.quote}</li>;
        })}
      </ul>
    </div>
  );
}

export default Quote;
