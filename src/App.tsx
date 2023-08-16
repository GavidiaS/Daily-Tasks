import React from 'react';
import { TaskContext } from './context'
import TaskCounter from './components/TaskCounter'
import TaskSearch from './components/TaskSearch'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import CreateTaskButton from './components/CreateTaskButton'
import Modal from './components/Modal';
import TaskForm from './components/TaskForm'
import TasksLoading from './components/TasksLoading'
import TasksError from './components/TasksError'
import TaskEmpty from './components/TaskEmpty'
import TaskDivForm from './components/TaskDivForm';

function App() {
  const {
    loading,
    error,
    totalTasks,
    searchedTasks,
    completeTask,
    deleteTask,
    openModal
  } = React.useContext(TaskContext);
  return (
    <>
      <h1>DailyTask</h1>
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        {loading && <TasksLoading />}
        {error && <TasksError />}
        {!loading && totalTasks === 0 && <TaskEmpty />}
        {
          searchedTasks.map(task => (
            <TaskItem
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onComplete={completeTask}
              onDelete={deleteTask}
            />
          ))
        }
      </TaskList>
      <CreateTaskButton />
      {
        openModal && <Modal>
          <TaskForm />
        </Modal>
      }
      <TaskDivForm />
    </>
  )
}

export default App
