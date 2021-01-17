const initialState = { game: {}, screenshots: {} };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
