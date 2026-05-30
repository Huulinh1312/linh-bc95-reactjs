import React from "react";

const Cart = (props) => {
  const {
    onCloseCart,
    products,
    cart,
    isCartOpen,
    onIncreaseQty,
    onDecreaseQty,
  } = props;

  // Nếu cart đóng thì không render
  if (!isCartOpen) return null;

  // Chuyển object cart thành mảng sản phẩm
  const cartItems = Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = products.find((p) => String(p.id) === String(productId));
      if (!product) return null;
      return { product, quantity };
    })
    .filter(Boolean);

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
      onClick={onCloseCart}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Giỏ hàng</h2>
          </div>
          <button
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            onClick={onCloseCart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-200">
          {cartItems.length === 0 ? (
            /* Empty Cart State */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Giỏ hàng của bạn đang trống</h3>
              <p className="text-gray-500 mb-6 text-sm">Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
              <button 
                onClick={onCloseCart}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            /* Cart Items List */
            <ul className="space-y-6">
              {cartItems.map(({ product, quantity }) => {
                const subtotal = product.price * quantity;

                return (
                  <li key={product.id} className="flex items-center gap-4 group">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-semibold text-gray-800 line-clamp-2 text-base leading-tight mb-1">
                        {product.name}
                      </h3>
                      <p className="text-blue-600 font-bold text-sm">
                        ${product.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Controls & Subtotal */}
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-gray-900 font-extrabold">
                        ${subtotal.toLocaleString()}
                      </div>
                      
                      {/* Quantity Pill */}
                      <div className="flex items-center bg-gray-50 rounded-full border border-gray-100 p-1">
                        <button
                          className="w-7 h-7 flex items-center justify-center rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                          onClick={() => onDecreaseQty(product.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                        </button>

                        <span className="w-8 text-center text-sm font-semibold text-gray-700">
                          {quantity}
                        </span>

                        <button
                          className="w-7 h-7 flex items-center justify-center rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          onClick={() => onIncreaseQty(product.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <div className="flex justify-between items-end mb-5">
              <span className="text-gray-500 font-medium">Tổng thanh toán</span>
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]">
              Thanh toán ngay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;