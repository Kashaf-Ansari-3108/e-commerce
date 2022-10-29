import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combineReducer from "./reducers/combineReducer";

const store = createStore(combineReducer, {}, applyMiddleware(thunk));

export default store;