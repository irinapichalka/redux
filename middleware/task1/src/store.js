import { createStore, applyMiddleware, compose } from "redux";
import { counterReducer } from "./counter.reducer.js";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("new state", store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  counterReducer,
  compose(composeEnhancers, applyMiddleware(logger))
);
export default store;
