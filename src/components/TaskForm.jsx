import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";

function TaskForm() {
  const emptyForm = {
      task: "",
      priority: false,
      isEdited: false,
      isDone: false,
    },
    [formData, setFormData] = useState(emptyForm),
    [tasks, setTasks] = useState([]);
  function changeInput(event) {
    setFormData(() =>
      event.target.type == "checkbox"
        ? { ...formData, [event.target.name]: event.target.checked }
        : { ...formData, [event.target.name]: event.target.value }
    );
  }
  function submitTask(event) {
    event.preventDefault();
    if (formData.isEdited) {
      const index = tasks.findIndex((task) => task.uuid === formData.uuid),
        newTask = tasks.slice();
      newTask[index] = { ...formData };
      setTasks(newTask);
    } else if (formData.task.length > 3) {
      formData.uuid = uuidv4();
      setTasks((prev) => [...prev, formData]);
      console.log(formData);
    }
    setFormData(emptyForm);
    event.target.reset();
  }
  function deleteTask(uuid) {
    setTasks(tasks.filter((task) => task.uuid !== uuid));
  }
  function editTask(uuid) {
    setFormData({
      ...tasks.find((task) => task.uuid === uuid),
      isEdited: true,
    });
  }
  function doneTask(uuid) {
    const task= tasks[tasks.findIndex((item) => item.uuid === uuid)]
    task.isDone = !task.isDone;
    const newtasks = tasks.slice()
    setTasks(newtasks);
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            doneTask={doneTask}
          />
        </div>
        <div className="col-md-6">
          <form onSubmit={submitTask}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Task"
                id="task"
                name="task"
                onChange={(e) => changeInput(e)}
                value={formData.task}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="priority"
                name="priority"
                onChange={(e) => changeInput(e)}
                checked={formData.priority}
              />
              <label className="form-check-label" htmlFor="priority">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
