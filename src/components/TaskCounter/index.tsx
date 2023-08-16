import './index.css';
import React from "react";
import { TaskContext } from "../../context";
import ProgressBar from '../ProgressBar';

export default function TaskCounter() {
  const { completedTasks, totalTasks } = React.useContext(TaskContext);
  return (
    <article className='TaskCounter'>
      <h2 className='TaskCounter-h1'>
        {`You have completed ${completedTasks} of ${totalTasks} tasks`}
      </h2>
      <ProgressBar />
    </article>
  );
}