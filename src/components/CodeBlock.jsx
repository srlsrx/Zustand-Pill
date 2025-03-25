import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language = 'javascript' }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div className="relative bg-gray-800 text-white rounded-lg p-4 max-h-[60vh] overflow-y-auto">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-500 transition"
            >
                Copiar
            </button>
            <SyntaxHighlighter language={language} style={oneDark} wrapLongLines>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
