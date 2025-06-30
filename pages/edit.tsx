import { useTasks, Task } from "../context/TaskContext";
import { useState } from "react";
import { PencilSquareIcon, CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function ActiveTasks() {
  const { tasks, markCompleted, updateTask, deleteTask } = useTasks();
  const activeTasks = tasks.filter((task) => !task.completed);

  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState<Partial<Task> | null>(null);

  const handleSave = () => {
  if (!editedTask) return;
  const start = new Date(editedTask.startDate!);
  const due = new Date(editedTask.dueDate!);
  if (due < start) {
    alert("Error: Due date cannot be earlier than start date!");
    return;
  }
  updateTask(editedTask as Task);
  alert("TODO updated successfully! ✏️"); // ✅ alert after edit
  setEditingTaskId(null);
  setEditedTask(null);
};


  return (
    <div className="bg-white rounded shadow p-4 sm:p-6 w-full overflow-x-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Edit TODOs</h1>
      {activeTasks.length === 0 ? (
        <p className="text-gray-800">No TODOs added.</p>
      ) : (
        <table className="min-w-[700px] w-full border text-sm sm:text-base">
          <thead>
            <tr className="bg-blue-500 text-black">
              <th className="border px-2 sm:px-4 py-2">Title</th>
              <th className="border px-2 sm:px-4 py-2">Start Date</th>
              <th className="border px-2 sm:px-4 py-2">Due Date</th>
              <th className="border px-2 sm:px-4 py-2">Type</th>
              <th className="border px-2 sm:px-4 py-2">Priority</th>
              <th className="border px-2 sm:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeTasks.map((task) => {
              const isEditing = editingTaskId === task.id;
              const dueDate = new Date(task.dueDate);
              const today = new Date();
              const daysLeft = Math.ceil((+dueDate - +today) / (1000 * 60 * 60 * 24));
              let rowClass = "";
              if (daysLeft < 2) rowClass = "bg-red-500";
              else if (daysLeft === 2) rowClass = "bg-yellow-500";
              else if (daysLeft > 2) rowClass = "bg-green-500";

              return (
                <tr key={task.id} className={`${rowClass} text-black text-center hover:bg-gray-200`}>
                  <td className="border px-2 sm:px-4 py-2">
                    {isEditing ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editedTask?.title || ""}
                        onChange={(e) =>
                          setEditedTask({ ...editedTask, title: e.target.value })
                        }
                      />
                    ) : (
                      task.title
                    )}
                  </td>
                  <td className="border px-2 sm:px-4 py-2">
                    {isEditing ? (
                      <input
                        type="date"
                        className="border p-1 rounded w-full"
                        value={editedTask?.startDate || ""}
                        onChange={(e) =>
                          setEditedTask({ ...editedTask, startDate: e.target.value })
                        }
                      />
                    ) : (
                      task.startDate
                    )}
                  </td>
                  <td className="border px-2 sm:px-4 py-2">
                    {isEditing ? (
                      <input
                        type="date"
                        className="border p-1 rounded w-full"
                        value={editedTask?.dueDate || ""}
                        onChange={(e) =>
                          setEditedTask({ ...editedTask, dueDate: e.target.value })
                        }
                      />
                    ) : (
                      task.dueDate
                    )}
                  </td>
                  <td className="border px-2 sm:px-4 py-2">
                    {isEditing ? (
                      <select
                        className="border p-1 rounded w-full bg-white"
                        value={editedTask?.type || ""}
                        onChange={(e) =>
                          setEditedTask({ ...editedTask, type: e.target.value })
                        }
                      >
                        <option value="" disabled>Select Type</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Study">Study</option>
                        <option value="Others">Others</option>
                      </select>
                    ) : (
                      task.type
                    )}
                  </td>
                  <td className="border px-2 sm:px-4 py-2">
                    {isEditing ? (
                      <select
                        className="border p-1 rounded w-full bg-white"
                        value={editedTask?.priority || ""}
                        onChange={(e) =>
                          setEditedTask({ ...editedTask, priority: e.target.value })
                        }
                      >
                        <option value="" disabled>Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    ) : (
                      task.priority
                    )}
                  </td>
                  <td className="border px-2 sm:px-4 py-2 flex flex-col sm:flex-row gap-2 justify-center">
                    {isEditing ? (
                      <button
                        onClick={handleSave}
                        className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 flex items-center justify-center"
                        title="Save"
                      >
                        <CheckCircleIcon className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingTaskId(task.id);
                          setEditedTask(task);
                        }}
                        className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700 flex items-center justify-center"
                        title="Edit"
                      >
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                    )}
                    <button
  onClick={() => {
    markCompleted(task.id);
    alert("TODO marked as completed! ✅"); // ✅ alert after marking done
  }}
  className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
>
<CheckCircleIcon className="w-5 h-5" /> 
</button>

                    <button
  onClick={() => {
    deleteTask(task.id);
    alert("TODO deleted successfully! 🗑️"); // ✅ alert after delete
  }}
  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
>
 <TrashIcon className="w-5 h-5" />
</button>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
