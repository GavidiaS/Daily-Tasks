import './index.css'
import { FaCircleCheck, FaCircleXmark, FaCircleDot } from 'react-icons/fa6'

type IconType = 'check' | 'delete' | 'neutral';

type TaskIconProps = {
  type: IconType;
  color: string;
  onClick: () => void;
}

const iconTypes = {
  "neutral": (color: string) => <FaCircleDot className="Icon-svg" fill={color} />,
  "check": (color: string) => <FaCircleCheck className="Icon-svg" fill={color} />,
  "delete": (color: string) => <FaCircleXmark className="Icon-svg" fill={color} />
}

export default function TaskIcon({ type, color, onClick }: TaskIconProps) {
  return (
    <span
      className={`Icon Icon-${type}`}
      onClick={onClick}
      role="button"
    >{iconTypes[type](color)}</span>
  );
}