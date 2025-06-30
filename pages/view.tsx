import { useTasks } from "../context/TaskContext";

export default function ViewTodos() {
  const { tasks } = useTasks();
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="bg-white rounded shadow p-4 sm:p-6 w-full overflow-x-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black">View TODOs </h1>
      {activeTasks.length === 0 ? (
        <p className="text-gray-800">No TODOs added.</p>
      ) : (
        <table className="min-w-[600px] w-full border text-sm sm:text-base">
          <thead>
            <tr className="bg-blue-500 text-black">
              <th className="border px-2 sm:px-4 py-2">Title</th>
              <th className="border px-2 sm:px-4 py-2">Start Date</th>
              <th className="border px-2 sm:px-4 py-2">Due Date</th>
              <th className="border px-2 sm:px-4 py-2">Type</th>
              <th className="border px-2 sm:px-4 py-2">Priority</th>
            </tr>
          </thead>
          <tbody>
            {activeTasks.map((task) => (
              <tr key={task.id} className="text-center text-black bg-white hover:bg-gray-100">
                <td className="border px-2 sm:px-4 py-2">{task.title}</td>
                <td className="border px-2 sm:px-4 py-2">{task.startDate}</td>
                <td className="border px-2 sm:px-4 py-2">{task.dueDate}</td>
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
