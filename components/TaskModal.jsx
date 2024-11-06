import Alert from "./Alert";
import { useEffect, useState } from "react";

export function TaskModal({ task, allTasks, setAllTasks, setIsTaskOpen }) {
  const [isOpen, setIsOpen] = useState(true);

  const [status, setStatus] = useState(task.status);

  const [confirmAction, setConfirmAction] = useState(false);

  useEffect(() => {
    setIsTaskOpen(isOpen);
  }, [isOpen, setIsTaskOpen]);

  const updateTaskStatus = () => {
    let newTasks = [...allTasks];

    newTasks[
      newTasks.findIndex((singleTask) => singleTask.id == task.id)
    ].status = status;

    setAllTasks(newTasks);
  };

  return (
    <div>
      {isOpen && (
        <Alert setIsOpen={setIsOpen} disableKeys={false}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 justify-between items-start lg:flex-row lg:items-center">
              <h2 className="text-xl font-bold">{task.name}</h2>
              <p title="Priority">
                <span className="px-2 py-1 bg-red-500 text-white rounded-xl text-sm font-bold">
                  {task.priority}
                </span>
              </p>
            </div>
            <p>
              <span className="font-bold">Assignee:</span> {task.assignee}
            </p>
            <div className="flex justify-between">
              <p title="Label">
                <span className="font-bold">Label:</span>
                <span className="ml-2 px-2 py-1 bg-black text-white rounded-xl text-sm font-bold">
                  {task.label}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-between items-start lg:flex-row lg:items-center">
              <p>
                <span className="font-bold">Created At:</span> {task.created_at}
              </p>
              <p>
                <span className="font-bold">Due At:</span> {task.due_at}
              </p>
            </div>
            <div>
              <label className="font-bold mr-2">Status:</label>
              <select
                value={status}
                className="p-2 border rounded"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          <div id="comments" className="mt-4 flex flex-col gap-2">
            <h5 className="text-black text-xl font-bold">Comments</h5>
            <div className="flex flex-col gap-4 text-black/70 text-sm">
              {[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolor.",
                "Tempora voluptas fugiat perferendis earum impedit hic molestiae ab modi dicta rem",
                "Iusto fugiat quaerat vero repellendus harum optio nisi, earum molestiae quis! Dignissimos atque doloribus illum numquam?",
              ].map((comment, commentIndex) => (
                <div key={commentIndex}>
                  <span className="font-bold">Jhon Doe (2m ago)</span> -{" "}
                  {comment}
                </div>
              ))}
            </div>
            <div>
              <textarea
                className="border-2 p-2 w-full"
                rows={5}
                placeholder="Write new comment here, press enter to submit"
              ></textarea>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button
              onClick={() => setConfirmAction(true)}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Save
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-100 rounded"
            >
              Cancel
            </button>
          </div>

          {confirmAction && (
            <Alert setIsOpen={setConfirmAction}>
              <div className="p-4">
                <p className="text-lg">
                  Are you sure you want to update the status?
                </p>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => {
                      updateTaskStatus();
                      setIsOpen(false);
                      setConfirmAction(false);
                    }}
                    className="px-4 py-2 bg-black text-white rounded"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setConfirmAction(false)}
                    className="px-4 py-2 bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Alert>
          )}
        </Alert>
      )}
    </div>
  );
}
