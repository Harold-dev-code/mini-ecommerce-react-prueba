
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> ayuda a detectar problemas en desarrollo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)