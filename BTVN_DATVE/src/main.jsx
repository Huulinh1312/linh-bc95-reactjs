import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookingPage from './pages/BookingPage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
// import booking.css
import './booking.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookingPage />} />

          {/* thêm not found */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
