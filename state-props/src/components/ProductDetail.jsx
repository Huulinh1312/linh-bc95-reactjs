import React from 'react'

const ProductDetail = ({product, onCloseProductDetail, onAddToCart}) => {
  if (!product) return null
  const handleAddToCart = () => {
    onAddToCart(product.id);
  }
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
      onClick={onCloseProductDetail}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        //Click vào nền đen (div ngopan) → sẽ đóng popup
        // những click vào div này sẽ không đóng popup, vì đã bị chặn sự kiện nổi bọt lên div ngopan
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ảnh sản phẩm */}
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Nút đóng */}
          <button
            onClick={onCloseProductDetail}
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          {/* Badge số lượng trong giỏ — chỉ hiện khi inCart */}
          
        </div>

        {/* Thông tin */}
        <div className="p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
            {product.category}
          </span>

          <h2 className="text-2xl font-extrabold text-gray-800 mt-3 mb-1">
            {product.name}
          </h2>

          <p className="text-3xl font-extrabold text-blue-600 mb-1">
            {product.price.toLocaleString('vi-VN')}đ
          </p>

          {/* Dòng trạng thái giỏ hàng */}
          

          <div className="flex gap-3">
            {/* Nút thêm vào giỏ — luôn luôn chỉ THÊM, không bao giờ xóa
                Lifting State Up: click → onAddToCart(id) → App.handleAddToCart(id)
                → App.cart[id] tăng lên 1 → cartQty prop cập nhật */}
            <button
              className="flex-1 py-3 rounded-xl font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              onClick={handleAddToCart}
            >
              + Thêm vào giỏ
            </button>

            <button
            onClick={onCloseProductDetail}
              className="px-5 py-3 rounded-xl font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail