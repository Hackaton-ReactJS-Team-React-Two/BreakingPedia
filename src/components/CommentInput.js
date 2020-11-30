import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./styles/SerchInput.css";

function CommentInput(props) {
  return (
    <div className="input-group mb-3">
      <input
        id="commentInput"
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            props.onAddComment();
            e.target.value = "";
          }
        }}
        onChange={(e) => {
          props.onChangeComment(e.target.value);
        }}
        type="text"
        placeholder="Commet"
        className="form-control"
      />
      <div className="input-group-append">
        <button
          onClick={() => {
            document.getElementById("commentInput").value = "";
            props.onAddComment();
          }}
          className="btn btn-light btn-outline-secondary"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}

export default CommentInput;
