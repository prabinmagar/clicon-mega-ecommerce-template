import { createContext, useReducer } from "react";
import { PropTypes } from "prop-types";
import productModalReducer from "../reducers/ProductModalReducer";

const initialState = {
  isProdModalOpen: false,
};

export const ProductModalContext = createContext({});

export const ProductModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productModalReducer, initialState);

  return (
    <ProductModalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};

ProductModalProvider.propTypes = {
  children: PropTypes.node,
};

