import { createContext, useReducer } from "react";
import { PropTypes } from "prop-types";
import addCardModalReducer from "../reducers/AddCardModalReducer";

const initialState = {
  isAddCardModalOpen: false,
};

export const AddCardModalContext = createContext({});

export const AddCardModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addCardModalReducer, initialState);

  return (
    <AddCardModalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AddCardModalContext.Provider>
  );
};

AddCardModalProvider.propTypes = {
  children: PropTypes.node,
};
