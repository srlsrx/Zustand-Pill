import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CartIcon from "./CartIcon";
import TodoModal from "./TodoModal";

const Header = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="flex absolute top-0 left-0 w-full items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
                <img
                    src="/Zustand-Pill/favicon.svg"
                    alt="Zustand Logo"
                    className="w-17 h-17"
                />
                <h1 className="text-xl font-bold text-gray-700">
                    Zustand Demo
                </h1>
            </div>
            <nav className="flex gap-4">
                <button
                    onClick={() => navigate("/counter")}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Contador
                </button>
                <button
                    onClick={() => navigate("/ToDo-List")}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                >
                    Lista de Tareas
                </button>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2"
                >
                    <FaPlus />
                    Añadir tarea
                </button>
                <CartIcon />
            </nav>
            <TodoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </header>
    );
};

export default Header;
