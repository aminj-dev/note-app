import { createContext, useReducer } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "handleAddNote":
        const d = new Date();
        const newNote = {
          id: Date.now(),
          body: action.payload.textAreaValue,
          date: d.toDateString(),
        };
        return [...state, newNote];
      case "handleChangeNote":
        return state.map((note) =>
          note.id === action.payload.id
            ? { ...note, body: action.payload.textAreaValue }
            : note
        );
      case "handleDeleteNote":
        const updatedNoteList = state.filter(
          (note) => note.id !== action.payload.id
        );
        return (state = updatedNoteList);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
