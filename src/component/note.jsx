import React from "react";
import "../styles/note.css";

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Note;
