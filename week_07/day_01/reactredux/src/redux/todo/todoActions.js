import { ADD_NOTE, DELETE_NOTE, VALIDATE_NOTE } from "./todoTypes";

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    note,
  };
};

export const deleteNote = (note) => {
  return {
    type: DELETE_NOTE,
    note,
  };
};

export const validateNote = (note) => {
  return {
    type: VALIDATE_NOTE,
    note,
  };
};
