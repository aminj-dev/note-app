import { createContext, useEffect, useReducer } from "react";
import { getInitialState, updateLocalStorage } from "./LocalStorage";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = [];

  const colors = ["#FFF176","#AED581","#81D4FA","#BA68C8","#FFCC80"];

  const reducer = (state, action) => {
    switch (action.type) {
      case "handleAddNote":
        const d = new Date();
        const newNote = {
          id: Date.now(),
          title: action.payload.title,
          body: action.payload.textAreaValue,
          date: d.toDateString(),
          backGround : colors[Math.floor(Math.random()* colors.length)]
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

  const [state, dispatch] = useReducer(reducer, initialState, getInitialState);

  useEffect(() => {
    updateLocalStorage(state);
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
