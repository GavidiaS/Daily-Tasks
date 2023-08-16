import './index.css'
import React from "react";
import { TaskContext } from "../../context";

export default function ProgressBar() {
  const { completedTasks, totalTasks } = React.useContext(TaskContext);
  const progressPercentage = (completedTasks / totalTasks) * 100;
  return (
    <div className="ProgressBar">
      <div className="ProgressBar-container">
        <div style={{
          width: `${progressPercentage}%`,
          height: '100%',
          background: `${totalTasks === 0 ? "#0008" : "#FFF"}`,
          borderRadius: '10px',
          transition: "all .5s linear"
        }}></div>
      </div>
    </div>
  );
}