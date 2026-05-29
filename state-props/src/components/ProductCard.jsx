import React from 'react'

//LƯU Ý: : props bên component cha ghi sao thì trong component con ghi đúng key 
const ProductCard = ({product, onOpenDetail}) => {
    const handleOpenDetail = () => {
        onOpenDetail(product);
    };
  return (
    <div
      className='rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-200'
      // Click → gọi onOpenDetail → App.setDetailProduct(product) → mở popup chi tiết
      // onOpenDetail là event (Function) component con gửi lên component cha
      onClick={handleOpenDetail}
    >
      {/* Ảnh sản phẩm */}
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Badge số lượng — chỉ hiện khi cartQty > 0 */}

          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            1 trong giỏ
            {/* cartQty nhận từ App — App.cart[id] tính ra và truyền xuống */}
          </div>

      </div>

      {/* Thông tin sản phẩm */}
      <div className="p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
            {product.category}
        </span>
        <h3 className="text-base font-bold text-gray-800 mt-2 mb-1">{product.name}</h3>
        <p className="text-lg font-extrabold text-blue-600">
          {product.price.toLocaleString()}đ
        </p>
        <p className="text-xs text-gray-400 mt-2">Nhấn để xem chi tiết →</p>
      </div>
    </div>
  )
}

export default ProductCard