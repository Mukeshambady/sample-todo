import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "taskList",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("taskList")) || [],
  },
  reducers: {
    addTask: (state, actions) => {
      state.tasks.push(actions.payload);
      localStorage.setItem("taskList", JSON.stringify(state.tasks));
    },
    updateTask: (state, actions) => {
      const { id, name, priority } = actions.payload;
      const findTask = state.tasks.find((task) => task.id === id);
      findTask.name = name;
      findTask.priority = priority;
      localStorage.setItem("taskList", JSON.stringify(state.tasks));
    },
    deleteTask: (state, actions) => {
      const { id } = actions.payload;
      const updateTask = state.tasks.filter((task) => task.id != id);
      state.tasks = updateTask;
      localStorage.setItem("taskList", JSON.stringify(state.tasks));
    },
  },
});
export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
