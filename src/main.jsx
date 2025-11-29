import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './App.css'
import App from './App.jsx'

AOS.init({
  duration: 600,
  once: true,
  offset: 120,
  easing: "ease-in-out", 
  mirror: false,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
