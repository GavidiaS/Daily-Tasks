import './index.css'
import React, { ChangeEvent } from "react";
import { TaskContext } from "../../context";

export default function TaskSearch() {
  const { searchTask, setSearchTask } = React.useContext(TaskContext);
  function searchTaskChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchTask(value);
  }
  return (
    <article className='TaskSearch'>
      <input
        className='TaskSearch-input'
        type="text"
        placeholder="Search tasks"
        value={searchTask}
        onChange={searchTaskChange}
      />
    </article>
  );
}