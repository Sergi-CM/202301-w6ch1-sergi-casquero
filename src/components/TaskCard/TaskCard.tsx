import { taskStructure } from "../../store/features/todo/types";
import Button from "../Button/Button";
import TaskCardStyled from "./TaskCardStyled";

interface TaskCardProps {
  task: taskStructure;
}

const TaskCard = ({ task: { name } }: TaskCardProps): JSX.Element => {
  return (
    <TaskCardStyled className="task-card">
      <h3 className="task-card__title"> {name} </h3>
      <Button />
    </TaskCardStyled>
  );
};

export default TaskCard;
