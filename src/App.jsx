import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import NoteList from "./component/notelist";
import NoteInput from "./component/noteinput";
import useNotes from "./hooks/useNotes";
import "./styles/App.css";

function App() {
  const { notes, addNote, deleteNote } = useNotes();

  return (
    <div className="App">
      <Header />
      <NoteInput addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
