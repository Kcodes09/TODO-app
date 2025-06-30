import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { TaskProvider } from "../context/TaskContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 text-black">
        <Header />
        <main className="container mx-auto px-4 py-6">
          <Component {...pageProps} />
        </main>
      </div>
    </TaskProvider>
  );
}
