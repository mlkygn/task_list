import React from "react";
import TaskListItem from "./TaskListItem";

function TaskList({ tasks, deleteTask, editTask, doneTask }) {
  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">Task List</h5>
        <ul className="list-group" id="task_list">
          {tasks.map((task) => (
            <TaskListItem
              key={task.uuid}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              doneTask={doneTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
