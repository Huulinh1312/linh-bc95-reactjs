import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { dataShoes, handleOpenDetail, onAddToCart } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {dataShoes.map((product) => (
        <ProductItem
          key={product.id}
          item={product}
          handleOpenDetail={handleOpenDetail}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
