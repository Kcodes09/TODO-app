type Props = {
  todo: { id: number; text: string; done: boolean; };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${todo.done ? "line-through text-gray-400" : ""}`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
        Delete
      </button>
    </li>
  );
}