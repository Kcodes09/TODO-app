import { useTasks } from "../context/TaskContext";

export default function CompletedTasks() {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="bg-white rounded shadow p-4 sm:p-6 w-full overflow-x-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Completed TODOs</h1>
      {completedTasks.length === 0 ? (
        <p className="text-gray-800">No completed TODOs yet.</p>
      ) : (
        <table className="min-w-[700px] w-full border text-sm sm:text-base">
          <thead>
            <tr className="bg-blue-500 text-black">
              <th className="border px-2 sm:px-4 py-2">Title</th>
              <th className="border px-2 sm:px-4 py-2">Start Date</th>
              <th className="border px-2 sm:px-4 py-2">Due Date</th>
              <th className="border px-2 sm:px-4 py-2">Completed Date</th>
              <th className="border px-2 sm:px-4 py-2">Type</th>
              <th className="border px-2 sm:px-4 py-2">Priority</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task) => (
              <tr key={task.id} className="text-center text-black bg-white hover:bg-gray-100">
                <td className="border px-2 sm:px-4 py-2">{task.title}</td>
                <td className="border px-2 sm:px-4 py-2">{task.startDate}</td>
                <td className="border px-2 sm:px-4 py-2">{task.dueDate}</td>
                <td className="border px-2 sm:px-4 py-2">{task.completedDate || "N/A"}</td>
                <td className="border px-2 sm:px-4 py-2">{task.type}</td>
                <td className="border px-2 sm:px-4 py-2">{task.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
