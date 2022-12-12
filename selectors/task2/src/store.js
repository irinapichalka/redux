import { createStore } from "redux";
import optionsReducer from "./options/options.reducer";

const store = createStore(
  optionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
