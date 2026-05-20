import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { data, handlePrdDetail, handleAddToCart,  } = props;

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* <div key={shoe.id} className="p-4 border rounded-md border-black/20">
                    <img src={shoe.image} alt={shoe.name} />
                    <h2>{shoe.name}</h2>
                    <h2>{shoe.price}</h2>
            </div> */}
      {data.map((shoe) => (
        <ProductItem
          key={shoe.id}
          item={shoe}
          handlePrdDetail={handlePrdDetail}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
