import { useTasks } from "../context/TaskContext";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Home() {
  const { addTask } = useTasks();
  const [newTask, setNewTask] = useState({
    title: "",
    startDate: "",
    dueDate: "",
    type: "",
    priority: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const start = new Date(newTask.startDate);
    const due = new Date(newTask.dueDate);
    if (due < start) {
      alert("Error: Due date cannot be earlier than start date!");
      return;
    }
    if (!newTask.title.trim()) return;
    addTask({ ...newTask, id: uuidv4(), completed: false });
    setNewTask({ title: "", startDate: "", dueDate: "", type: "", priority: "" });
  };

  return (
    <div className="bg-white rounded shadow p-4 sm:p-6 w-full max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">Add a New TODO</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          className="border p-2 rounded text-black w-full"
          placeholder="TODO Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col flex-1">
            <label className="text-black mb-1">Start Date</label>
            <input
              type="date"
              className="border p-2 rounded text-black w-full"
              value={newTask.startDate}
              onChange={(e) => setNewTask({ ...newTask, startDate: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-black mb-1">Due Date</label>
            <input
              type="date"
              className="border p-2 rounded text-black w-full"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              required
            />
          </div>
        </div>
        <select
  className="border p-2 rounded text-black w-full bg-white focus:ring focus:border-blue-500"
  value={newTask.type}
  onChange={(e) => setNewTask({ ...newTask, type: e.target.value })}
  required
>
  <option value="" disabled>Select Type</option>
  <option value="Work">Work</option>
  <option value="Personal">Personal</option>
  <option value="Study">Study</option>
  <option value="Others">Others</option>
</select>
       <select
  className="border p-2 rounded text-black w-full bg-white focus:ring focus:border-blue-500"
  value={newTask.priority}
  onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
  required
>
  <option value="" disabled>Select Priority</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 w-full sm:w-auto"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
