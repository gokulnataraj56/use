import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themetoogele from './themetoogele.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themetoogele />
  </StrictMode>,
)
