import React, { createContext, useContext, useReducer } from "react";
import { data } from "./data";
import Reducer from "./Reducer";
const AppContext = createContext();

const initialState = {
  category: "",
  difficulty: "",
  type: "",
  score: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const submitForm = (info) => {
    return dispatch({ type: "HANDLE_SUBMIT", payload: info });
  };
  const submitScore = (score) => {
    return dispatch({ type: "SCORE", payload: score });
  };
  const reset = () => {
    return dispatch({ type: "RESET" });
  };
  return (
    <>
      <AppContext.Provider
        value={{ ...state, data, submitForm, submitScore, reset }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
