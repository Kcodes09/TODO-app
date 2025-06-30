import TodoItem from "./TodoItem";

type Todo = { id: number; text: string; done: boolean; };

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <ul className="bg-white rounded shadow">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
