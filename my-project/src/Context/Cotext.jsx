import { createContext, useReducer } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "handleAddNote":
        const newNote = {
          id: Date.now(),
          body: action.payload.textAreaValue,
        };
        return [...state, newNote];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
