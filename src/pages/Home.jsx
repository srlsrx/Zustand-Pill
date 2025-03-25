import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import CodeBlock from "../components/CodeBlock";
import CodeModal from "../components/CodeModal";

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sections = [
        {
            title: "¿Qué es Zustand?",
            content: (
                <p>
                    <strong>Zustand</strong> es una <strong>librería minimalista</strong> para la gestión de <strong>estado global</strong> en aplicaciones React.
                    Su nombre significa <em>“estado”</em> en alemán, y fue creada por el equipo de <strong>Poimandres</strong> 
                    (también responsables de <strong>Jotai</strong>).

                    <br /><br />
                    A diferencia de soluciones más complejas como <strong>Redux</strong> o incluso <strong>Context API</strong>, Zustand no requiere 
                    <strong> boilerplate</strong> ni envolver tu aplicación con múltiples <strong>Providers</strong>.

                    <br /><br />
                    Puedes <strong>crear un store en segundos</strong> y consumirlo directamente desde cualquier componente, 
                    sin importar su nivel en el árbol de componentes.

                    <br /><br />
                    Zustand es ideal tanto para <strong>proyectos pequeños</strong> como para <strong>aplicaciones complejas a gran escala</strong>, 
                    permitiéndote mantener un código más limpio y un rendimiento óptimo con una curva de aprendizaje mínima.
                </p>
            )
        },
        {
            title: "¿Por qué usar Zustand?",
            content: (
                <ul className="list-none pl-5 space-y-1">
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="mt-1 text-blue-500 flex-shrink-0" />
                        <span>No necesitas <strong>Providers</strong>, ni configuración adicional.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="mt-1 text-blue-500 flex-shrink-0" />
                        <span>Acceso directo al <strong>estado global</strong> desde cualquier componente.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="mt-1 text-blue-500 flex-shrink-0" />
                        <span>Modularización sencilla mediante <strong>slices</strong> o funciones separadas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="mt-1 text-blue-500 flex-shrink-0" />
                        <span>Perfecto para <strong>aplicaciones pequeñas y grandes</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="mt-1 text-blue-500 flex-shrink-0" />
                        <span>Compatible con <strong>SSR</strong>, <strong>React Server Components</strong> y otras arquitecturas modernas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="mt-1 text-blue-500 flex-shrink-0" />
                        <span><strong>Ligera</strong> y sin dependencias externas.</span>
                    </li>
                </ul>
            )
        },
        {
            title: "Acceso sin envoltorios",
            content: (
                <p>
                    Una de las grandes ventajas de <strong>Zustand</strong> es que <strong>no necesitas envolver tu aplicación</strong> en ningún <strong>Provider</strong>.

                    <br /><br />
                    A diferencia de librerías como <strong>Redux</strong> o <strong>Context API</strong>, donde el estado debe ser accedido dentro de un contexto específico, Zustand permite que <strong>cualquier componente</strong> consuma el estado global directamente a través de un hook personalizado, sin importar su posición en la jerarquía del árbol de componentes.

                    <br /><br />
                    Esto no solo simplifica el código, sino que también <strong>mejora la escalabilidad</strong> de tu aplicación, reduce la necesidad de pasar props o levantar estado, y elimina configuraciones innecesarias. En definitiva, <strong>menos fricción y más productividad</strong>.
                </p>
            )
        },
        {
            title: "¿Cómo se usa?",
            content: (
                <>
                    <p className="mb-4">Aquí tienes un ejemplo básico de cómo crear y usar un store:</p>
                    <CodeBlock language="javascript" code={`import { create } from 'zustand'

const useStore = create((set) => ({
  beers: 0,
  increase: () => set((state) => ({ beers: state.beers + 1 }))
}))`} />

                    <h3 className="text-xl font-semibold mt-8 mb-2">Uso en un componente</h3>
                    <CodeBlock language="javascript" code={`import { useStore } from './store'

const BeersCounter = () => {
  const beers = useStore((state) => state.beers)
  return <h1>{beers} cervezas tomadas</h1>
}`} />
                </>
            )
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mt-10 px-4">
            <div className="flex justify-center mb-6 gap-2 flex-wrap">
                {sections.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 rounded-md border text-sm transition ${
                            activeTab === index
                                ? 'bg-gray-700 text-white border-blue-600'
                                : 'bg-blue-600 text-gray-100 border-gray-600 hover:bg-gray-600'
                        }`}
                    >
                        {_.title}
                    </button>
                ))}
            </div>

            <section className="bg-white text-gray-800 rounded-lg border flex flex-col items-center justify-center border-gray-700 p-6 w-210 min-h-100 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">{sections[activeTab].title}</h2>
                <div key={activeTab} className="text-lg leading-relaxed transition-opacity duration-500 ease-in-out opacity-100">
                    {sections[activeTab].content}
                </div>
            </section>
        </div>
    );
};

export default Home;
