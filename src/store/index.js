import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";

const rootReducer = combineReducers({ auth: authReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
