import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../util/reduxStore/taskSlice";
import { nanoid } from "nanoid";
import TaskLis from "../list-task/TaskList";
function AddTask() {
  const taskNameRef = useRef();
  const priorityRef = useRef();

  const [taskId, setTaskId] = useState("");
  const dispatch = useDispatch();

  //   functions
  function reset() {
    taskNameRef.current.value = "";
    priorityRef.current.value = "";
    setTaskId("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: taskId || nanoid(),
      name: taskNameRef.current.value,
      priority: priorityRef.current.value,
    };
    if (taskId) {
      dispatch(updateTask(data));
    } else {
      dispatch(addTask(data));
    }
    reset();
  };

  const handleEdit = (task) => {
    const { id, name, priority } = task;
    taskNameRef.current.value = name;
    priorityRef.current.value = priority;
    setTaskId(id);
  };

  return (
    <>
      <div className="w-1/2 p-2 border rounded shadow-md m-auto">
        <form
          className="flex flex-col justify-center items-center gap-5 m-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold underline">Task Manger</h1>
          <hr />
          <div className="p-5 border max-w-96">
            <div>
              <label htmlFor="task-name">
                Task Name
                <input
                  id="task-name"
                  ref={taskNameRef}
                  type="text"
                  className="border border-black m-2 p-2 w-full"
                  name="taskName"
                  required
                  maxLength={50}
                />
              </label>
            </div>
            <div>
              <label htmlFor="priority">
                Priority
                <select
                  id="priority"
                  className="border border-black m-2 p-2 w-full"
                  ref={priorityRef}
                  required
                >
                  <option value="">Select</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </label>
              <div />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-green-900 rounded-md p-2 text-white font-bold"
              >
                {taskId ? "Update" : " Add Task"}
              </button>
            </div>
          </div>
        </form>
        <TaskLis {...{ handleEdit, taskId }} />
      </div>
    </>
  );
}

export default AddTask;
