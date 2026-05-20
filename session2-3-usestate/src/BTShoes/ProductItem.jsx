import React from "react";

const ProductItem = (props) => {
  const { item: shoe, handlePrdDetail, handleAddToCart } = props;
  return (
    <div className="p-4 border rounded-md border-black/20">
      <img src={shoe.image} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <h2>{shoe.price}</h2>
      <button
        onClick={() => {
          handlePrdDetail(shoe);
        }}
        className="px-3 py-2 bg-black text-white mt-2 cursor-pointer"
      >
        Detail
      </button>

      <button
        onClick={() => {
          handleAddToCart(shoe);
        }}
        className="px-3 py-2 bg-blue-500 text-white mt-2 cursor-pointer ml-5"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
