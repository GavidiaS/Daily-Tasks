import TaskIcon from "./TaskIcon";

type CompleteIconProps = {
  onComplete: () => void;
}

export function CompleteIcon({ onComplete }: CompleteIconProps) {
  return (
    <TaskIcon
      type="check"
      color="#2B2"
      onClick={onComplete}
    />
  );
}