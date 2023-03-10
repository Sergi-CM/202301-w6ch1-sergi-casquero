import { useEffect } from "react";
import useFetchApi from "../../store/features/todo/hooks/fetchApi";
import { useAppSelector } from "../../store/hooks";
import TaskCard from "../TaskCard/TaskCard";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { getTaskList } = useFetchApi();

  useEffect(() => {
    getTaskList();
  }, [getTaskList]);
  const tasks = useAppSelector((state) => {
    return state.loadList;
  });

  return (
    <CardListStyled>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
