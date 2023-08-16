import TaskIcon from "./TaskIcon";

type DeleteIconProps = {
  onDelete: () => void;
}

export function DeleteIcon({ onDelete }: DeleteIconProps) {
  return (
    <TaskIcon
      type="delete"
      color="#999"
      onClick={onDelete}
    />
  );
}