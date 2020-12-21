import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from "../actions";

const NoteList = () => {
  const notes = useSelector((state: any) => state.notesReducer.notes);
  let [note, setNote] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const saveNote = () => {
    dispatch(addNote(note));
    setNote("");
  };
  const deleteSome = () => {
    dispatch(deleteNote(note));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={handleChange}
        name="note"
      />
      <button onClick={saveNote}>Save Note</button>
      <button onClick={deleteSome}>Delete Note</button>
      <hr />
      <p>
        {notes ? (
          notes.map((item: any, idx: number) => {
            return <li key={idx}>{item}</li>;
          })
        ) : (
          <div>Nothing</div>
        )}
      </p>
    </div>
  );
};
export default NoteList;
