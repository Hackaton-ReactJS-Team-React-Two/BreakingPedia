import React from "react"

import "./styles/CommentList.css"

function CommentList(props) {
  return(
    <div>
      {props.comments.map((comment,id) => {
        return(
          <div key={id} className="border comment">
            <div className="comment__date text-secondary">
              {comment.date.toDateString()}
            </div>
            <div className="comment__content text-white text-break">
              {comment.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentList