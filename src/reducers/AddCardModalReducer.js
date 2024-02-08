const addCardModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_ADD_CARD_MODAL":
      return {
        ...state,
        isAddCardModalOpen: true,
      };
    case "CLOSE_ADD_CARD_MODAL":
      return {
        ...state,
        isAddCardModalOpen: false,
      };
    default:
      return state;
  }
};

export default addCardModalReducer;
