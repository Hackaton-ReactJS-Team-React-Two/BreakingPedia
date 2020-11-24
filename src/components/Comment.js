import React from "react";

import "./styles/Comment.css";

function Comment() {
  return (
    <div>
      <input type="text" className="form-control mb-3" placeholder="Comment" />
      <div className="card detail__Comment mb-3">
        <div className="card-header">
          Fecha de la publicacion ( 24-11-2020 )
        </div>
        <div className="card-body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          fugiat provident perspiciatis, consequatur libero ratione doloribus
          quos, eveniet, esse cupiditate ab unde excepturi officia optio numquam
          cumque reiciendis eius maxime.
        </div>
      </div>
    </div>
  );
}

export default Comment;
