import { createContext, useContext, useState, ReactNode } from "react";

export type Task = {
  id: string;
  title: string;
  startDate: string;
  dueDate: string;
  type: string;
  priority: string;
  completed: boolean;
  completedDate?: string; // ✅ records when the task was marked done
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  markCompleted: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

  const updateTask = (updatedTask: Task) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );

  const markCompleted = (taskId: string) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: true,
              completedDate: new Date().toISOString().split("T")[0], // ✅ sets current date
            }
          : task
      )
    );

  const deleteTask = (taskId: string) =>
    setTasks((prev) => prev.filter((task) => task.id !== taskId));

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, markCompleted, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
