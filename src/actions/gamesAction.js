import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

// Action Creator

export const loadGames = (number) => async (dispatch) => {
  // Fetch axios
  const popularData = await axios.get(popularGamesUrl(number));
  const newGamesData = await axios.get(newGamesUrl(number));
  const upcomingData = await axios.get(upcomingGamesUrl(number));

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};
