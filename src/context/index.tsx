import React from 'react'
import { Task, TaskContextProps, ContextType } from './template'
import { useLocalStorage } from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = React.createContext<ContextType>({} as ContextType);

export function TaskProvider({ children }: TaskContextProps) {
  const { item: tasks, saveItem: saveTask, loading, error } = useLocalStorage<Task[]>('TASKS', []);
  const [searchTask, setSearchTask] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter(task => {
    const taskText = task.text.toLowerCase();
    const searchText = searchTask.toLowerCase();
    return taskText.includes(searchText);
  });
  function addTask(text: string) {
    const newTasks = [...tasks];
    newTasks.push({ id: uuidv4(), text, completed: false });
    saveTask(newTasks);
  }
  function completeTask(id: string) {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.id === id);
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    saveTask(newTasks);
  }
  function deleteTask(id: string) {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.id === id);
    newTasks.splice(taskIndex, 1);
    saveTask(newTasks);
  }
  return (
    <TaskContext.Provider value={{
      loading,
      error,
      addTask,
      completeTask,
      deleteTask,
      totalTasks,
      completedTasks,
      searchTask,
      setSearchTask,
      searchedTasks,
      openModal,
      setOpenModal
    }}>{children}</TaskContext.Provider>
  );
}