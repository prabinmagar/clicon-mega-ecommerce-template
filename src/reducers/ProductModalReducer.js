const productModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_PROD_MODAL":
      return {
        ...state,
        isProdModalOpen: true,
      };
    case "CLOSE_PROD_MODAL":
      return {
        ...state,
        isProdModalOpen: false,
      };
    default:
      return state;
  }
};

export default productModalReducer;
