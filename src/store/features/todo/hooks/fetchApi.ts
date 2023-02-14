import { useCallback } from "react";
import { useAppDispatch } from "../../../hooks";
import { loadTaskListActionCreator } from "../todoSlice";

const apiUrl = process.env.REACT_APP_API_URL!;

const useFetchApi = () => {
  const dispatch = useAppDispatch();

  const getTaskList = useCallback(async () => {
    try {
      const apiList = await fetch(`${apiUrl}`);
      const taskList = await apiList.json();

      dispatch(loadTaskListActionCreator(taskList));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getTaskList };
};

export default useFetchApi;
