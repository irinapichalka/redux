import React from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from "../tasksGateway";

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  handleTaskStatusChange = (id) => {
    const { done, text } = this.props.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.props.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <ul className="list">
        {sortedList.map((task) => (
          <Task
            key={task.id}
            {...task}
            onDelete={this.handleTaskDelete}
            onChange={this.handleTaskStatusChange}
          />
        ))}
      </ul>
    );
  }
}

export default TasksList;
