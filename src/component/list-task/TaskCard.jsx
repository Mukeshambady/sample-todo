/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteTask } from "../../util/reduxStore/taskSlice";

const colors = {
  High: "text-red-500",
  Medium: "text-orange-500",
  Low: "text-green-500",
};
function TaskCard({ task, handleEdit, taskId }) {
  const { id, name, priority } = task;

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask({ id }));
    }
  };
  return (
    <div className="flex justify-between items-center border rounded shadow-md p-5 ">
      <div>
        <p className="p-2">Task Name : {" " + name + " "}</p>
        <p className="p-1 ">
          Priority :{" "}
          <span className={`${colors[priority]}`}>{" " + priority + " "}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="p-2 bg-green-400 rounded-lg disabled:cursor-not-allowed"
          onClick={() => !taskId && handleEdit(task)}
          disabled={!!taskId}
        >
          Edit
        </button>

        <button
          className="p-2 bg-red-400 rounded-lg disabled:cursor-not-allowed"
          disabled={!!taskId}
          onClick={() => !taskId && handleDelete(task)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
