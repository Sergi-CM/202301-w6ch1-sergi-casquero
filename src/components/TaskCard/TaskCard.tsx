import TaskCardStyled from "./TaskCardStyled";

interface TaskCardProps {
  name: string;
}

const TaskCard = ({ name }: TaskCardProps): JSX.Element => {
  return (
    <TaskCardStyled className="task-card">
      <h3 className="task-card__title"> {name} </h3>
      <button>✖️</button>
    </TaskCardStyled>
  );
};

export default TaskCard;
