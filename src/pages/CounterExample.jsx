import Counter from "../components/Counter";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import CodeModal from "../components/CodeModal";

const CounterExample = () => {
    const [activeModal, setActiveModal] = useState(null);
    return (
        <>
            <div className="max-w-md mx-auto mt-10 mb-6 px-4 pt-3 text-center text-gray-700">
                <div className="text-lg text-white bg-blue-500 p-4 rounded-lg flex flex-col items-center gap-2">
                    <FaInfoCircle className="text-white text-xl flex-shrink-0" />
                    <span>
                        Este contador utiliza <strong>Zustand</strong> para
                        establecer un <strong>estado global</strong>. Al
                        modificar el contador, el{" "}
                        <strong>componente del carrito de la compra</strong> (en
                        el header) accede a este estado global y refleja el
                        cambio automáticamente.
                    </span>
                </div>
            </div>
            <Counter />
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
                        setActiveModal("counter");
                    }}
                >
                    Counter
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded mx-3 hover:bg-gray-600 transition"
                    onClick={() => {
                        setActiveModal("cart");
                    }}
                >
                    Carrito
                </button>
            </div>

            <CodeModal
                isOpen={activeModal === "store"}
                onClose={() => setActiveModal(null)}
                code={`import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => (state.count > 0 ? { count: state.count - 1 } : state)),
    reset: () => set({ count: 0 }),
}));`}
                language="javascript"
            />
            <CodeModal
                isOpen={activeModal === "counter"}
                onClose={() => setActiveModal(null)}
                code={`import { useCounterStore } from "../store/useCounterStore";

const Counter = () => {
    const { count, increase, decrease, reset } = useCounterStore();

    return (
        <div className="text-center mt-20 p-10 rounded-lg bg-white">
            <h2 className="text-2xl text-gray-800 font-semibold mb-4">
                Contador con Zustand
            </h2>
            <p className="text-5xl font-bold text-blue-600 mb-6">{count}</p>
            <div className="flex justify-center gap-4">
                <button
                    onClick={decrease}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                    -
                </button>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                    Reset
                </button>
                <button
                    onClick={increase}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;`}
                language="jsx"
            />
            <CodeModal
                isOpen={activeModal === "cart"}
                onClose={() => setActiveModal(null)}
                code={`import { useCounterStore } from "../store/useCounterStore";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
    const count = useCounterStore((state) => state.count);

    return (
        <div className="relative inline-block">
            <FaShoppingCart className="text-4xl text-gray-800" />
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {count}
                </span>
            )}
        </div>
    );
};

export default CartIcon;`}
                language="jsx"
            />
        </>
    );
};

export default CounterExample;
