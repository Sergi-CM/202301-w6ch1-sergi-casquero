import { taskStructure } from "../../store/features/todo/types";
import TaskCardStyled from "./TaskCardStyled";

interface TaskCardProps {
  task: taskStructure;
}

const TaskCard = ({ task: { name } }: TaskCardProps): JSX.Element => {
  return (
    <TaskCardStyled className="task-card">
      <h3 className="task-card__title"> {name} </h3>
      <button>✖️</button>
    </TaskCardStyled>
  );
};

export default TaskCard;
