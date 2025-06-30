
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const linkClasses = (path: string) =>
    `hover:underline ${router.pathname === path ? "font-bold border-b-2 border-white" : ""}`;

  return (
    <header className="bg-blue-700 text-white py-4 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <h1 className="text-2xl font-bold">📋 TODO App</h1>
        <nav className="flex gap-6 text-lg">
          <Link href="/" className={linkClasses("/")}>Home</Link>
          <Link href="/view" className={linkClasses("/view")}>View TODOs</Link>
          <Link href="/active" className={linkClasses("/active")}>Edit TODOs</Link>
          <Link href="/completed" className={linkClasses("/completed")}>Completed TODOs</Link>
        </nav>
      </div>
    </header>
  );
}


