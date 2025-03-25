import './App.css'
import CounterExample from './pages/CounterExample'
import TodoListPage from './pages/TodoListPage'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<CounterExample />} />
      <Route path="/ToDo-List" element={<TodoListPage />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  );
}

export default App
