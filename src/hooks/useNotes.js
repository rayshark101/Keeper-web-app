import { useState, useEffect } from "react";
import { getNotes, saveNotes } from "../utils/storage";

function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  function addNote(title, content) {
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
      },
    ]);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return { notes, addNote, deleteNote };
}

export default useNotes;
