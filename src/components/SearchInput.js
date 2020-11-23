import React from "react";

function SearchInput() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
