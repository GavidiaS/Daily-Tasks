import './index.css'
import { ReactNode } from "react"

type TaskListProps = {
  children: ReactNode
}

export default function TaskList({ children }: TaskListProps) {
  return (
    <ul className="TaskList">
      {children}
    </ul>
  );
}