import React from "react";

function TaskListItem({ task, deleteTask, editTask, doneTask }) {
  return (
    <li className={`list-group-item ${task.isDone && 'bg-success'}`} uuid={task.uuid}>
      <span>
        {task.priority && <sup className="text-danger">priority</sup>}
        {task.task}
      </span>
      <div className="btn-group float-end" role="group">
        <button
          type="button"
          onClick={() => doneTask(task.uuid)}
          className="btn btn-sm btn-success"
        >
          Done
        </button>
        <button
          type="button"
          onClick={() => editTask(task.uuid)}
          className="btn btn-sm btn-warning"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => deleteTask(task.uuid)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskListItem;
