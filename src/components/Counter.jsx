import { useCounterStore } from "../store/useCounterStore";

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

export default Counter;
