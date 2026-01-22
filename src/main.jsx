import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Counter from './Counter.jsx'
import Sai from './Sai.jsx'
import Yasaswini from './Yasaswini.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Yasaswini />
    <Sai />
    <Login />
    <Counter />
  </StrictMode>,
)
