import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskListStructure } from "./types";

const listInitialState: taskListStructure = [];

export const todoSlice = createSlice({
  name: "toDoList",
  initialState: listInitialState,
  reducers: {
    loadTaskList: (
      currentTaskList,
      action: PayloadAction<taskListStructure>
    ) => [...action.payload],
  },
});

export const tasksReducer = todoSlice.reducer;
export const { loadTaskList: loadTaskListActionCreator } = todoSlice.actions;
