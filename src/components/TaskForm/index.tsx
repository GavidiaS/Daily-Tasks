import './index.css'
import React, { ChangeEvent, FormEvent } from "react";
import { TaskContext } from "../../context";

export default function TaskForm() {
  const { addTask, setOpenModal } = React.useContext(TaskContext);
  const [newTaskValue, setNewTaskValue] = React.useState("");
  function onClose() {
    setOpenModal(false);
  }
  function addSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  }
  function newTaskValueChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setNewTaskValue(value);
  }
  return (
    <aside className='TaskForm'>
      <form className="TaskForm-form" onSubmit={addSubmit}>
        <textarea
          autoFocus
          className="TaskForm-textarea"
          placeholder="Add a new task"
          value={newTaskValue}
          onChange={newTaskValueChange}
        ></textarea>
        <div className="TaskForm-buttonContainer">
          <button
            className="TaskForm-button TaskForm-button--cancel"
            type="button"
            onClick={onClose}
          >Cancel</button>
          {
            newTaskValue !== ""
            ? <button
              className="TaskForm-button TaskForm-button--add"
              type="submit"
            >Add</button>
            : null
          }
        </div>
      </form>
    </aside>
  );
}