import React from 'react'

const Cart = ({ isOpenCart, cart, products, onCloseCart, onChangeQuantity }) => {
  if (!isOpenCart) return null

  const cartItems = Object.entries(cart).map(([productId, quantity]) => {
    const product = products.find((p) => p.id == productId)
    return { product, quantity }
  })
  console.log('cartItems', cartItems)

  const totalPrice = cartItems.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)

  return (
    <div>
      {/* Overlay nền đen (click vào đây sẽ đóng popup) */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
        onClick={onCloseCart}
      >
        {/* Popup */}
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header popup */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-extrabold text-gray-800">Giỏ hàng</h2>
            <button
              className="text-gray-400 hover:text-gray-600 text-xl"
              onClick={onCloseCart}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          {/* Danh sách sản phẩm trong giỏ */}
          <ul className="space-y-3 mb-4">
            {cartItems.length === 0 ? (
              <li className="text-center text-gray-500 py-10">Giỏ hàng trống.</li>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center gap-3 text-sm">
                  <span className="text-gray-700 font-medium flex-1 truncate">{product.name}</span>
                  {/* Nút tăng giảm số lượng */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-500 font-bold flex items-center justify-center"
                      onClick={() => onChangeQuantity(product.id, -1)}
                    >
                      −
                    </button>
                    <span className="w-4 text-center font-bold">{quantity}</span>
                    <button
                      type="button"
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-500 font-bold flex items-center justify-center"
                      onClick={() => onChangeQuantity(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-blue-600 font-bold w-20 text-right">
                    {(product.price * quantity).toLocaleString()}đ
                  </span>
                </li>
              ))
            )}
          </ul>
          {/* Tổng tiền */}
          <div className="border-t pt-3 flex justify-between font-extrabold text-gray-800">
            <span>Tổng</span>
            <span className="text-blue-600">{totalPrice.toLocaleString()}đ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart