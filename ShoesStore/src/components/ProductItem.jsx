import React from "react";

const ProductItem = (props) => {
  const { item, handleOpenDetail, onAddToCart } = props;
  const handleAddToCart = () => {
    onAddToCart(item.id);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 group cursor-pointer">
      {/* Image */}
      <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-52 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {item.name}
        </h2>

        <p className="text-red-500 text-2xl font-bold mt-2">${item.price}</p>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {item.shortDescription}
        </p>

        <div className="grid grid-cols-2 gap-5">
          <button
            className="mt-5 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition duration-300"
            onClick={() => handleOpenDetail(item)}
          >
            Xem chi tiết
          </button>
          <button
            className="mt-5 w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
