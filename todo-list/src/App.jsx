import React from "react";
import TodoList from "./tasks/components/TodoList";
import { Provider } from "react";
import store from "./store";
import { getTaskList } from "./tasks/tasks.actions";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
