import {useState} from 'react'
import TodoList from '../components/TodoList'
import { FaInfoCircle } from 'react-icons/fa'
import CodeModal from '../components/CodeModal'

const TodoListPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <>
      <div className="max-w-md mx-auto mt-10 mb-6 px-4 text-center text-gray-700">
        <div className="text-lg text-white bg-blue-500 p-4 rounded-lg flex flex-col items-center gap-2">
          <FaInfoCircle className="text-white text-xl flex-shrink-0" />
          <span>
            Esta lista de tareas utiliza <strong>Zustand</strong> para gestionar el <strong>estado global</strong>. Puedes añadir nuevas tareas desde el botón del header o el de la misma línea.
          </span>
        </div>
      </div>

      <TodoList />
      <h2 className="text-xl font-bold text-center mt-10 mb-4 text-white">
                Código
            </h2>
            <div className="flex justify-center mt-3 py-4 rounded-md">
                <button
                    className="px-4 py-2 bg-blue-600 text-white mx-3 rounded hover:bg-gray-600 transition"
                    onClick={() => {
                        setActiveModal("store");
                    }}
                >
                    Zustand
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded mx-3 hover:bg-gray-600 transition"
                    onClick={() => {
                        setActiveModal("list");
                    }}
                >
                    Lista
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded mx-3 hover:bg-gray-600 transition"
                    onClick={() => {
                        setActiveModal("header-button");
                    }}
                >
                    Botón Header
                </button>
            </div>

            <CodeModal
                isOpen={activeModal === "store"}
                onClose={() => setActiveModal(null)}
                code={`import { create } from "zustand";

export const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (text) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { id: crypto.randomUUID(), text, completed: false },
            ],
        })),   
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));`}
                language="javascript"
            />
            <CodeModal
                isOpen={activeModal === "list"}
                onClose={() => setActiveModal(null)}
                code={`import { useState } from "react";
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
                            className={todo.completed ? "flex-1 cursor-pointer line-through text-gray-500" : "flex-1 cursor-pointer"}
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

export default TodoList
`}
                language="jsx"
            />
            <CodeModal
                isOpen={activeModal === "header-button"}
                onClose={() => setActiveModal(null)}
                code={`import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoModal = ({ isOpen, onClose }) => {
    const [input, setInput] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[rgb(0,0,0,0.95)] flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Añadir nueva tarea
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Escribe tu tarea..."
                        className="px-4 py-2 border rounded-lg"
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Añadir
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoModal;
`}
                language="jsx"
            />
    </>
  )
}

export default TodoListPage