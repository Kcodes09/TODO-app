import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">
        🗒️ TODO Dashboard
      </h1>
      <div className="grid gap-4 w-full max-w-sm">
        <Link
          href="/add"
          className="block bg-green-600 text-white text-center py-3 rounded hover:bg-green-700 font-semibold"
        >
          ➕ Add TODO
        </Link>
        <Link
          href="/view"
          className="block bg-blue-600 text-white text-center py-3 rounded hover:bg-blue-700 font-semibold"
        >
          👀 View TODOs
        </Link>
        <Link
          href="/edit"
          className="block bg-yellow-600 text-white text-center py-3 rounded hover:bg-yellow-700 font-semibold"
        >
          ✏️ Active TODOs
        </Link>
        <Link
          href="/completed"
          className="block bg-purple-600 text-white text-center py-3 rounded hover:bg-purple-700 font-semibold"
        >
          ✅ Completed TODOs
        </Link>
      </div>
    </div>
  );
}
