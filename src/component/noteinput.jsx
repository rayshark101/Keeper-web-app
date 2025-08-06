import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        maxLength={50}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        rows={3}
        maxLength={500}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteInput;
