import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchInput(props) {
  return (
    <div className="container">
      <div className="row__input">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => {
              props.onChange(e);
            }}
          />
          <div className="input-group-append">
            <button className="btn btn-light btn-outline-secondary">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            &nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
