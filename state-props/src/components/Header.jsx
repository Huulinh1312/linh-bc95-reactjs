import React from 'react'

const Header = ({ cartCount, onCartClick }) => {
  return (
<header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-8 px-6 rounded-2xl mb-8 shadow-lg">
      <div className="flex items-center justify-between">

        {/* Bên trái: tiêu đề và mô tả */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">TEST</h1>
          <p className="text-blue-100 mt-1 text-sm">BC95</p>
        </div>

        {/* Bên phải: nút giỏ hàng — click → gọi onCartClick lên App */}
        <button
          type="button"
          onClick={onCartClick}
          className="relative p-2 rounded-xl hover:bg-white/20 transition-colors"
        >
          <i className="fa-solid fa-cart-shopping text-2xl" />

          {/* Badge số lượng — chỉ hiện khi có sản phẩm trong giỏ */}
          {
            // -top-1: đẩy badge lên trên 1 đơn vị (4px)
            // -right-1: đẩy badge sang phải 1 đơn vị (4px)
            cartCount > 0 && (
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-sm font-bold w-5 h-5 rounded-full flex items-center justify-center'>
                {cartCount}
              </span>
            )
          }
        </button>

      </div>
    </header>
  )
}

export default Header