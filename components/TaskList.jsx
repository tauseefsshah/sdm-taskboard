import { TaskModal } from "./TaskModal";
import { useEffect, useState } from "react";

export function TaskList({ status, allTasks, setAllTasks }) {
  const [taskIndex, setTaskIndex] = useState(0);

  const [isTaskOpen, setIsTaskOpen] = useState(false);

  const [currentListTasks, setCurrentListTasks] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && taskIndex != currentListTasks.length - 1) {
      setTaskIndex(taskIndex + 1);
    }

    if (e.key === "ArrowUp" && taskIndex != 0) {
      setTaskIndex(taskIndex - 1);
    }

    if (e.key === "Enter") {
      setIsTaskOpen(true);
    }

    if (e.key === "Escape") {
      setIsTaskOpen(false);
    }
  };

  useEffect(() => {
    setCurrentListTasks(allTasks.filter((task) => task.status == status));
  }, [allTasks, status]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="w-full flex flex-col gap-8">
      <div
        id="insights"
        className="grid grid-cols-2 items-center gap-4 text-sm lg:grid-cols-4"
      >
        <p>
          <span className="font-bold">📊 Total Tasks:</span>{" "}
          {currentListTasks.length}
        </p>
        <p>
          <span className="font-bold">😣 Urgent Priority:</span>{" "}
          {currentListTasks.filter((task) => task.priority == "urgent").length}
        </p>
        <p>
          <span className="font-bold">🙁 Medium Priority:</span>{" "}
          {currentListTasks.filter((task) => task.priority == "medium").length}
        </p>
        <p>
          <span className="font-bold">😕 Low Priority:</span>{" "}
          {currentListTasks.filter((task) => task.priority == "low").length}
        </p>
      </div>

      <div id="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Tasks"
          className="border-2 w-full p-2 rounded-lg"
          onChange={(e) =>
            setCurrentListTasks(
              allTasks.filter(
                (task) =>
                  task.status == status && task.name.includes(e.target.value)
              )
            )
          }
        />
      </div>

      <div
        id="tasks"
        className="grid grid-cols-6 gap-1 items-center text-center px-2 font-bold lg:grid-cols-9"
      >
        <div>#</div>
        <div className="col-span-3">Name</div>
        <div className="hidden lg:block">Labels</div>
        <div className="hidden lg:block">Priority</div>
        <div className="col-span-2">Assignee</div>
        <div className="col-span-1">Due</div>
      </div>

      {currentListTasks.map((task, index) => (
        <div
          key={task.id}
          className={
            `grid grid-cols-6 gap-1 items-center text-center px-2 py-4 text-sm lg:grid-cols-9 ` +
            (taskIndex == index ? "bg-black/10" : "")
          }
          onClick={() => setTaskIndex(index)}
          onDoubleClick={() => setIsTaskOpen(true)}
        >
          <div>{task.id}</div>
          <div className="col-span-3">{task.name}</div>
          <div className="text-xs font-bold hidden lg:block">
            <span className="px-2 py-1 bg-black text-white rounded-xl">
              {task.label}
            </span>
          </div>
          <div className="text-xs font-bold hidden lg:block">
            <span className="px-2 py-1 bg-red-500 text-white rounded-xl">
              {task.priority}
            </span>
          </div>
          <div className="col-span-2">{task.assignee}</div>
          <div>{new Date(task.due_at).toLocaleDateString()}</div>
        </div>
      ))}

      {isTaskOpen && (
        <TaskModal
          task={currentListTasks[taskIndex]}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          setIsTaskOpen={setIsTaskOpen}
        ></TaskModal>
      )}
    </div>
  );
}
