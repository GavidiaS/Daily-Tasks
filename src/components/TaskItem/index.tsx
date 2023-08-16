import './index.css'
import { CompleteIcon } from "../../icons/CompleteIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { NeutralIcon } from "../../icons/NeutralIcon";

type TaskItemProps = {
  id: string;
  text: string;
  completed: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ id, text, completed, onComplete, onDelete }: TaskItemProps) {
  return (
    <li className='TaskItem'>
      {
        completed
        ? <CompleteIcon onComplete={() => onComplete(id)} />
        : <NeutralIcon onComplete={() => onComplete(id)} />
      }
      <p className={`${completed ? "TaskItem-p--active" : ""}`}>{text}</p>
      <DeleteIcon onDelete={() => onDelete(id)} />
    </li>
  );
}