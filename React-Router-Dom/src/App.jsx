import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './layouts/Mainlayout'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import ProtectedRoute from './layouts/ProtectedRoute'
import AdminLayout from './layouts/AdminLayout'
//LƯU Ý:
// App này sẽ chỉ define các router
// VD: /home => HomePage

function App() {

  return (
    <BrowserRouter>
      <Routes>
      {/* Trong này sẽ liệt kê các router của các page */}

      {/* Lý thuyết 1: nested routes */}
      <Route path='/' element={<MainLayout/>} >
        <Route path='products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
      </Route>
      
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      {/* endpoint Admin */}
      <Route 
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout/>
          </ProtectedRoute>
        } />
      {/* nếu không khớp với bất kỳ route nào thì sẽ đi vào Route Not Found */}
      {/* route này bắt buộc phải đặt ở cuối cùng */}
      <Route path="*" element={<NotFound/>} />
      {/* Lý thuyết 2: route parameters */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
