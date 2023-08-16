import './index.css'
import React, { ChangeEvent, FormEvent } from "react";
import { TaskContext } from "../../context";
import file from '../../images/file.png'

export default function TaskDivForm() {
  const { addTask } = React.useContext(TaskContext);
  const [newTaskValue, setNewTaskValue] = React.useState("");
  function addSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTask(newTaskValue);
    setNewTaskValue("");
  }
  function newTaskValueChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setNewTaskValue(value);
  }
  return (
    <aside className='TaskDivForm'>
      <form className="TaskDivForm-form" onSubmit={addSubmit}>
        <textarea
          autoFocus
          className="TaskDivForm-textarea"
          placeholder="Add a new task"
          value={newTaskValue}
          onChange={newTaskValueChange}
          style={{ resize: "none" }}
        ></textarea>
        <div className="TaskDivForm-buttonContainer">
          <button
            className="TaskDivForm-button"
            type="submit"
          >Add Task</button>
        </div>
      </form>
      <img className='TaskDivForm-img' src={file} alt="File" />
    </aside>
  );
}