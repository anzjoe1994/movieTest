import { combineReducers } from "redux";

import dashboardReducer from "./dashboardReducer";
import movieDetailReducer from "./movieDetailReducer";
const rootReducer = combineReducers({
  dashboardReducer,
  movieDetailReducer
});

export default rootReducer;
