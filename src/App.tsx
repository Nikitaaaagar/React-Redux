import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import History from "./components/History";
import NoteList from "./components/Note";

function App() {
  return (
    <div className="App">
      <Counter />
      <History />
      <NoteList />
    </div>
  );
}

export default App;
