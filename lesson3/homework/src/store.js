import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cart.reducer.js";
import { userReducer } from "./user.reducer.js";
import { languageReducer } from "./language.reducer.js";

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
