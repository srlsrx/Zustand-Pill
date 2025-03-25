import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="pt-9">
    <BrowserRouter>
    <Header />
      <App />
    </BrowserRouter>
    </main>
  </StrictMode>
)
