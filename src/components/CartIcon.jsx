import { useCounterStore } from "../store/useCounterStore";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
    const count = useCounterStore((state) => state.count);

    return (
        <div className="relative flex justify-center items-center w-17">
            <FaShoppingCart className="text-4xl text-gray-800" />
            {count > 0 && (
                <span className="absolute -top-3 -right-0 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {count}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
