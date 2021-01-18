// Action Creator

export const setSmallCards = () => async (dispatch) => {
  dispatch({
    type: "SET_SMALL_CARDS",
  });
};

export const setMediumCards = () => async (dispatch) => {
  dispatch({
    type: "SET_MEDIUM_CARDS",
  });
};

export const setLargeCards = () => async (dispatch) => {
  dispatch({
    type: "SET_LARGE_CARDS",
  });
};
