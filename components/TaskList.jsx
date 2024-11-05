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
    <div className="w-full">
      <div className="grid grid-cols-6 gap-1 items-center text-center px-2 font-bold lg:grid-cols-8">
        <div>#</div>
        <div className="col-span-3">Name</div>
        <div className="hidden lg:block">Labels</div>
        <div className="hidden lg:block">Priority</div>
        <div className="col-span-2">Assignee</div>
      </div>

      {tasks.map((task, index) => (
        <div
          key={task.id}
          className={
            `grid grid-cols-6 gap-1 items-center text-center px-2 py-4 text-sm lg:grid-cols-8 ` +
            (taskIndex == index ? "bg-black/10" : "")
          }
          onClick={() => setTaskIndex(index)}
        >
          <div>{task.id}</div>
          <div className="col-span-3">{task.name}</div>
          <div className="hidden lg:block">
            <span className="px-2 py-1 bg-black text-white rounded-xl">
              {task.label}
            </span>
          </div>
          <div className="hidden lg:block">
            <span className="px-2 py-1 bg-red-500 text-white rounded-xl">
              {task.priority}
            </span>
          </div>
          <div className="col-span-2">{task.assignee}</div>
        </div>
      ))}
    </div>
  );
}
