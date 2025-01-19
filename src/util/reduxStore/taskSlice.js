import { createSlice } from "@reduxjs/toolkit";

function setToLocalStorage(tasks) {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}
function getLocalstorage() {
  return JSON.parse(localStorage.getItem("taskList")) || [];
}
export const taskSlice = createSlice({
  name: "taskList",
  initialState: {
    tasks: getLocalstorage(),
  },
  reducers: {
    addTask: (state, actions) => {
      state.tasks.push(actions.payload);
      setToLocalStorage(state.tasks);
    },
    updateTask: (state, actions) => {
      const { id, name, priority } = actions.payload;
      const findTask = state.tasks.find((task) => task.id === id);
      findTask.name = name;
      findTask.priority = priority;
      setToLocalStorage(state.tasks);
    },
    deleteTask: (state, actions) => {
      const { id } = actions.payload;
      const updateTask = state.tasks.filter((task) => task.id != id);
      state.tasks = updateTask;
      setToLocalStorage(state.tasks);
    },
  },
});
export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
