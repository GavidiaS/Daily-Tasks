import { ReactNode } from "react"

export type TaskContextProps = {
  children: ReactNode
}

export type Task = {
  id: string,
  text: string,
  completed: boolean
}

export type ContextType = {
  loading: boolean;
  error: boolean;
  addTask: (text: string) => void;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
  totalTasks: number,
  completedTasks: number,
  searchTask: string,
  setSearchTask: (text: string) => void;
  searchedTasks: Task[];
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}