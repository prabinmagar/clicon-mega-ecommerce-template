import { createContext, useReducer } from "react";
import { PropTypes } from "prop-types";
import ratingModalReducer from "../reducers/RatingModalReducer";

const initialState = {
  isRatingModalOpen: false,
};

export const RatingModalContext = createContext({});

export const RatingModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ratingModalReducer, initialState);

  return (
    <RatingModalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </RatingModalContext.Provider>
  );
};

RatingModalProvider.propTypes = {
  children: PropTypes.node,
};
