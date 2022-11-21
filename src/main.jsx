import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApicontextProvider } from "./context/Apicontext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApicontextProvider>
      <App />
    </ApicontextProvider> 
  </React.StrictMode>
)
