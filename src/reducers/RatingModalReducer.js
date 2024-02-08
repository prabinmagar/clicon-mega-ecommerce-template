const ratingModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_RATING_MODAL":
      return {
        ...state,
        isRatingModalOpen: true,
      };
    case "CLOSE_RATING_MODAL":
      return {
        ...state,
        isRatingModalOpen: false,
      };
    default:
      return state;
  }
};

export default ratingModalReducer;
