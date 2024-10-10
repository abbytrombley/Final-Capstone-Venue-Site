import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { App } from './App'
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
)