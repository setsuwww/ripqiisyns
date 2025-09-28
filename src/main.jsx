import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './App.css'
import App from './App.jsx'

AOS.init({
  duration: 600,   // default durasi animasi (ms)
  once: true,      // animasi cuma jalan sekali
  offset: 120,     // jarak scroll sebelum animasi mulai
  easing: "ease-in-out", 
  mirror: false,   // ga diulang pas scroll ke atas
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
