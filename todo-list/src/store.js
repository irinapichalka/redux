import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tasksReducer from "./tasks/tasks.reducer";

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = createStore(reducer);

export default store;
