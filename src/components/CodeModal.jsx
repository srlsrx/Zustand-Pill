import CodeBlock from "./CodeBlock";

const CodeModal = ({ isOpen, onClose, code, language = "javascript" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[rgb(0,0,0,0.95)] flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full pt-15 max-w-5xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    ✕
                </button>
                <CodeBlock code={code} language={language} />
            </div>
        </div>
    );
};

export default CodeModal;
