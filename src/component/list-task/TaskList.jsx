/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

function TaskList({ handleEdit, taskId }) {
  const taskList = useSelector((state) => state.taskList.tasks);

  if (!taskList?.length) {
    return <p>No Data Found</p>;
  }
  return (
    <>
      {taskList?.map((task) => {
        return (
          <TaskCard
            key={task?.id}
            task={task}
            handleEdit={handleEdit}
            taskId={taskId}
          />
        );
      })}
    </>
  );
}

export default TaskList;
