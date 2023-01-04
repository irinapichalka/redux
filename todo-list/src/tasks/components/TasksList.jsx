import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

const TasksList = ({ tasks, handleTaskDelete, handleTaskStatusChange }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onDelete={handleTaskDelete}
          onChange={handleTaskStatusChange}
        />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    })
  ),
  handleTaskDelete: PropTypes.func.isRequired,
  handleTaskStatusChange: PropTypes.func.isRequired,
};

export default TasksList;
