import { useEffect, useState } from "react";

export function TaskList({ tasks }) {
  const [taskIndex, setTaskIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && taskIndex != tasks.length - 1) {
      setTaskIndex(taskIndex + 1);
    }

    if (e.key === "ArrowUp" && taskIndex != 0) {
      setTaskIndex(taskIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <table className="w-full">
      <thead>
        <tr className="flex gap-2 justify-between items-center">
          <th>#</th>
          <th>Name</th>
          <th>Labels</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Assignee</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr
            key={task.id}
            className={
              `flex gap-2 justify-between items-center px-2 py-4 ` +
              (taskIndex == index ? "bg-black/10" : "")
            }
            onClick={() => setTaskIndex(index)}
          >
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.labels[0]}</td>
            <td>{task.status}</td>
            <td>{task.priority}</td>
            <td>{task.assignee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
