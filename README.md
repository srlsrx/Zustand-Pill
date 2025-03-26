# 🐻 ZustandPill

Una demo interactiva creada con React + Zustand para entender y experimentar cómo funciona el estado global con esta librería minimalista.

## 🚀 ¿Qué es Zustand?

[Zustand](https://github.com/pmndrs/zustand) es una librería para la gestión de estado en React que destaca por su simplicidad, rendimiento y ausencia de boilerplate. Permite crear y consumir estado global sin necesidad de Providers ni configuraciones complicadas.

---

## 🧩 Características del proyecto

- 🔄 Estado global compartido entre componentes sin contextos
- ✅ Ejemplos interactivos:
  - Contador global sincronizado con un icono de carrito
  - Lista de tareas gestionada con Zustand
  - Snippets de código mostrados con `CodeBlock` y opción de copiar
- 📚 Pestañas explicativas con información y ejemplos sobre Zustand
- 💅 Estilo limpio, moderno y responsive con TailwindCSS
- 🧠 Arquitectura escalable, preparada para slices

---

## 🖥️ Demo local

1. Clona el repositorio:

```bash
git clone https://github.com/srlsrx/Zustand-Pill.git
cd Zustand-Pill
```

2.	Instala dependencias:
   
```bash
npm install
```

3.	Inicia el servidor:

```bash
npm run dev
```

---

## 🗂️ Estructura del proyecto

```bash
src/
├── components/     → Componentes reutilizables (Counter, CartIcon, CodeBlock, Modals...)
├── pages/          → Vistas principales del proyecto (Home, CounterExample, TodoListPage...)
├── store/          → Zustand stores (useCounterStore, useTodoStore, etc.)
├── App.jsx         → Rutas y estructura general
└── main.jsx        → Entrada principal con Router y layout global
```

