import Link from "next/link";
import { useTasks } from "../context/TaskContext";
import { EyeIcon, CheckCircleIcon, PlusCircleIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const { tasks } = useTasks();

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">
        📋 TODO Dashboard
      </h1>
      <div className="grid gap-4 w-full max-w-sm">
        <Link
          href="/view"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold"
        >
          <EyeIcon className="w-5 h-5" />
          View TODOs ({activeCount})
        </Link>
        <Link
          href="/completed"
          className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded hover:bg-purple-700 font-semibold"
        >
          <CheckCircleIcon className="w-5 h-5" />
          Completed TODOs ({completedCount})
        </Link>
      </div>

      <div className="grid gap-4 w-full max-w-sm mt-8">
        <Link
          href="/add"
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded hover:bg-green-700 font-semibold"
        >
          <PlusCircleIcon className="w-5 h-5" />
          Add TODO
        </Link>
        <Link
          href="/edit"
          className="flex items-center justify-center gap-2 bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 font-semibold"
        >
          <PencilSquareIcon className="w-5 h-5" />
          Edit TODOs
        </Link>
      </div>
    </div>
  );
}

