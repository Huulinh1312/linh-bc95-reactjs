import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//LƯU Ý:
// App này sẽ chỉ define các router
// VD: /home => HomePage

function App() {

  return (
    <BrowserRouter>
      <Routes>
      {/* Trong này sẽ liệt kê các router của các page */}
  
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
