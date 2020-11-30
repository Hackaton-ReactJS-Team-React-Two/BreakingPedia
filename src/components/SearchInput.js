import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchInput(props) {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="form-inline d-flex justify-content-center md-form form-sm">
          <FontAwesomeIcon icon={faSearch} className="fa-lg" color="white" />
          &nbsp;&nbsp;
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search"
            onChange={(e) => {
              props.onChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
