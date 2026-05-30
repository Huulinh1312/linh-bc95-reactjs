import React from "react";

const Modal = (props) => {
  const { content, onCloseHandleDetail, onAddToCart } = props;
  const handleAddToCart = () => {
    onAddToCart(content.id);
  };
  if (!content) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onCloseHandleDetail}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[500px] rounded-xl p-6 relative"
      >
        {/* Nút đóng */}
        <button
          onClick={onCloseHandleDetail}
          className="absolute top-3 right-3 text-xl"
        >
          ✖
        </button>

        <img
          src={content.image}
          alt={content.name}
          className="w-full h-64 object-contain"
        />

        <h2 className="text-2xl font-bold mt-4">{content.name}</h2>

        <p className="text-red-500 text-xl font-semibold mt-2">
          ${content.price}
        </p>

        <p className="mt-4 text-gray-600">{content.description}</p>
        <p className="mt-4 text-gray-600">{content.shortDescription}</p>
        <p className="mt-4 text-red-500">Còn hàng: {content.quantity}</p>
        <button
          className="mt-5 w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default Modal;
