import React from "react";
import Note from "./note";

function NoteList({ notes, deleteNote }) {
  return (
    <div className="note-list">
      {notes.length === 0 && <p className="no-notes">No notes yet.</p>}
      {notes.map((note) => (
        <Note key={note.id} {...note} onDelete={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
