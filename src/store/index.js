import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import challengesReducer from "./reducers/challenges";

const rootReducer = combineReducers({
  auth: authReducer,
  challenges: challengesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
