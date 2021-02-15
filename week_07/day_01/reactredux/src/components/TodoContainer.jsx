import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, validateNote } from "../redux";
import { BsTrash } from "react-icons/bs";

const TodoContainer = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleClickOnNote = (note) => {
    dispatch(validateNote(note));
  };

  console.log("what is notes", todo);
  return (
    <div className="TodoContainer">
      {" "}
      <h2>TODO</h2>
      <p>Todo List</p>
      <ul>
        {todo.notes.map((note) => (
          <li
            onClick={() => handleClickOnNote(note)}
            style={note.validated ? { textDecoration: "line-through" } : null}
          >
            {note.content}

            <BsTrash onClick={() => dispatch(deleteNote(note))} />
          </li>
        ))}
      </ul>
      <input id="input" placeholder="enter your text here"></input>
      <button
        type="button"
        onClick={() =>
          dispatch(addNote(document.getElementById("input").value))
        }
      >
        Add Note
      </button>
    </div>
  );
};

export default TodoContainer;
