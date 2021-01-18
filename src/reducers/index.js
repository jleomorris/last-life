import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
import cardSizeReducer from "./cardSizeReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
  cardSizes: cardSizeReducer,
});

export default rootReducer;
