import './index.css'
import React from "react";
import { TaskContext } from "../../context";
import { FaPlus } from "react-icons/fa6";

export default function CreateTaskButton() {
  const { openModal, setOpenModal } = React.useContext(TaskContext);
  function handleOpenModal() {
    setOpenModal(!openModal);
  }
  return (
    <button className="CreateTaskButton" onClick={handleOpenModal}><FaPlus /></button>
  );
}