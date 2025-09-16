import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Remove loading screen
setTimeout(() => {
  const loading = document.querySelector('.loading')
  if (loading) {
    loading.style.opacity = '0'
    loading.style.transition = 'opacity 0.3s'
    setTimeout(() => loading.remove(), 300)
  }
}, 1000)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
