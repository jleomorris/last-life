const initialState = {
  isExtraSmallSelected: false,
  isSmallSelected: false,
  isMediumSelected: false,
  isLargeSelected: false,
};

const cardSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EXTRA_SMALL_CARDS":
      return {
        ...state,
        isExtraSmallSelected: true,
        isSmallSelected: false,
        isMediumSelected: false,
        isLargeSelected: false,
      };
    case "SET_SMALL_CARDS":
      return {
        ...state,
        isExtraSmallSelected: false,
        isSmallSelected: true,
        isMediumSelected: false,
        isLargeSelected: false,
      };
    case "SET_MEDIUM_CARDS":
      return {
        ...state,
        isExtraSmallSelected: false,
        isSmallSelected: false,
        isMediumSelected: true,
        isLargeSelected: false,
      };
    case "SET_LARGE_CARDS":
      return {
        ...state,
        isExtraSmallSelected: false,
        isSmallSelected: false,
        isMediumSelected: false,
        isLargeSelected: true,
      };
    default:
      return { ...state };
  }
};

export default cardSizeReducer;
