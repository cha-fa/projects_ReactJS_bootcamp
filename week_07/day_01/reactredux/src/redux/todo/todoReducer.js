import { ADD_NOTE, DELETE_NOTE, VALIDATE_NOTE } from "./todoTypes";

const initialState = {
  notes: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { content: action.note, validated: false }],
      };
    case VALIDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.content === action.note.content
            ? { ...note, validated: true }
            : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(
          (note) => note.content !== action.note.content
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
