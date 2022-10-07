import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './components/Start'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
     <Route path={'/'} element={<Start />} /> 
     <Route path={'/game'} element={<App />} /> 
    </Routes>
  </BrowserRouter>
)
