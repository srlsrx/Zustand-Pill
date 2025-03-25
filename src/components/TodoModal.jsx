import { useState } from "react";
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
