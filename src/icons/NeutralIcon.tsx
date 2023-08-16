import TaskIcon from "./TaskIcon";

type NeutralIconProps = {
  onComplete: () => void;
}

export function NeutralIcon({ onComplete }: NeutralIconProps) {
  return (
    <TaskIcon
      type="neutral"
      color="#AAA"
      onClick={onComplete}
    />
  );
}