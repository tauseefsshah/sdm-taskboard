export function TaskModal({ task, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60">
      <div className="max-w-screen-md mx-auto fixed inset-0 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-full">
          <h2 className="text-xl mb-4">{task.name}</h2>
          <p>{task.assignee}</p>
          <p>{task.label}</p>
          <p>{task.status}</p>
          <p>{task.created_at}</p>
          <p>{task.due_at}</p>
          <p>{task.priority}</p>
          <div className="mt-4">
            <label>Status:</label>
            <select value={task.status} className="p-2 border rounded">
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div className="mt-4 flex gap-4">
            <button className="px-4 py-2 bg-black text-white rounded">
              Save
            </button>

            <button onClick={onClose} className="px-4 py-2 bg-gray-100 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
