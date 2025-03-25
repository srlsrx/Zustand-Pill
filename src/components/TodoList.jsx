import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
    const [input, setInput] = useState("");
    const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput("");
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Lista de Tareas
            </h2>

            <form onSubmit={handleSubmit} className="flex mb-4 gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Nueva tarea"
                    className="flex-1 px-4 py-2 border rounded-lg"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Añadir
                </button>
            </form>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
                    >
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            className={`flex-1 cursor-pointer ${
                                todo.completed
                                    ? "line-through text-gray-500"
                                    : ""
                            }`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
