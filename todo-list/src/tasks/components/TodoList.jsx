import React from "react";
import TasksList from "./TasksList";
import { connect } from "react-redux";
import * as tasksActions from "../tasks.actions";
import { tasksListSelector } from "../tasks.selectors";
import CreateTaskInput from "./CreateTaskInput";

class TodoList extends React.Component {
  handleTaskCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };
  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasks={this.props.tasks}
            getTaskList={this.props.getTaskList}
          />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  gaetTaskList: tasksActions.getTaskList,
};

const mapState = (state) => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
