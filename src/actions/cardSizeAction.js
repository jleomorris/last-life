// Action Creator

export const setExtraSmallCards = () => async (dispatch) => {
  dispatch({
    type: "SET_EXTRA_SMALL_CARDS",
  });
};

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
