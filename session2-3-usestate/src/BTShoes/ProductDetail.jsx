import React from "react";

const ProductDetail = (props) => {
  const { product } = props;
  return (
    <div className="border border-black/10 p-4 my-5 rounded-md">
      <h2>Product Detail</h2>
      <h2>Name: {product.name} </h2>
      <img src={product.image} alt={product.name} className="w-40" />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Size: {product.sizes.join(", ")}</p>
    </div>
  );
};

export default ProductDetail;
