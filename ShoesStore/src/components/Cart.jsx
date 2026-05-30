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

  // nếu cart đóng thì không render
  if (!isCartOpen) return null;

  // chuyển object cart thành mảng sản phẩm
  const cartItems = Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = products.find((p) => String(p.id) === String(productId));

      // nếu không tìm thấy product thì bỏ qua
      if (!product) return null;

      return {
        product,
        quantity,
      };
    })
    .filter(Boolean);

  // tính tổng tiền
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
      onClick={onCloseCart}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-gray-800">Giỏ hàng</h2>

          <button
            className="text-gray-400 hover:text-gray-600 text-xl"
            onClick={onCloseCart}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        {/* Empty cart */}
        {cartItems.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            Giỏ hàng đang trống
          </div>
        ) : (
          <>
            {/* Cart list */}
            <ul className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">
              {cartItems.map(({ product, quantity }) => {
                const subtotal = product.price * quantity;

                return (
                  <li
                    key={product.id}
                    className="flex items-center gap-3 border-b pb-3"
                  >
                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-400">
                        $ {product.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        className="w-6 h-6 rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-500 font-bold flex items-center justify-center"
                        onClick={() => onDecreaseQty(product.id)}
                      >
                        −
                      </button>

                      <span className="w-4 text-center font-bold">
                        {quantity}
                      </span>

                      <button
                        className="w-6 h-6 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-500 font-bold flex items-center justify-center"
                        onClick={() => onIncreaseQty(product.id)}
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="w-24 text-right">
                      <span className="text-blue-600 font-bold">
                        $ {subtotal.toLocaleString()}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Total */}
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">Tổng tiền</span>

              <span className="text-2xl font-extrabold text-blue-600">
                $ {totalPrice.toLocaleString()}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
