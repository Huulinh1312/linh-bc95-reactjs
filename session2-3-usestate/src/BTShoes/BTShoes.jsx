  import React, { useState } from "react";
  import dataShoes from "./data.json";
  import ProductList from "./ProductList";
  import ProductDetail from "./ProductDetail";
  import { ProductCart } from "./ProductCart";

  const BTShoes = () => {
    console.log({ dataShoes });
    const [prdDetail, setPrdDetail] = useState({
      sizes: [32, 33, 34, 35],
      id: 2,
      name: "vans old school",
      alias: "vans-old-school",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[3,2,1]",
      feature: true,
      image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
      imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
    });
    const [cart, setcart] = useState([
      {
        sizes: [32, 33, 34, 35],
        id: 2,
        name: "vans old school",
        alias: "vans-old-school",
        price: 200,
        description:
          "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        size: "[32,33,34,35]",
        shortDescription:
          "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        quantity: 200,
        deleted: false,
        categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
        relatedProducts: "[3,2,1]",
        feature: true,
        image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
      },
    ]);
    console.log({ prdDetail });
    const handleAddToCart = (Prd) => {
      // 1. Thêm sản phẩm vào giỏ hàng
      // Kiểm tra sản phẩm đã tôn tại trong giỏ hàng chưa
      const index = cart.findIndex((item) => item.id === Prd.id);
      if (index === -1) {
        // chưa có sp trong giỏ hàng => thêm mới
        Prd.cartQuantity = 1; // số lượng mặc định khi thêm mới vào giỏ hàng
        setcart([...cart, Prd]); // spread operator
      } else {
        // đã có sp trong giỏ hàng => tăng số lượng
        const newCart = [...cart];
        newCart[index].cartQuantity += 1;
        setcart(newCart);
      }
    };

    const handlePrdDetail = (newPrd) => {
      setPrdDetail(newPrd);
    };

    return (
      <div className="mt-10 container mx-auto">
        <h1 className="text-center text-2xl font-medium">BT Shoes</h1>

        {/* {DS sản phẩm } */}
        {/* <div className='grid grid-cols-3 gap-4'>
                  {dataShoes.map((shoe) => (
                      <div key={shoe.id} className="p-4 border rounded-md">
                          <img src={shoe.image} alt={shoe.name} />
                          <h2>{shoe.name}</h2>
                          <h2>{shoe.price}</h2>
                      </div>
                  ))}
              </div> */}

        <ProductDetail product={prdDetail} />

        <ProductCart cart={cart} />

        {/*  */}
        <button
          data-bs-toggle="modal"
          // id của modal muốn mở
          data-bs-target="#product-cart-modal"
          className="btn btn-success mb-5"
        >
          Cart
        </button>

        <ProductList
          data={dataShoes}
          handlePrdDetail={handlePrdDetail}
          handleAddToCart={handleAddToCart}
        />
      </div>
    );
  };
  // Good morning
  export default BTShoes;

  // Tham trị  và tham chiếu
  // Tham trị : value type (string, number, boolean , null undefined)
  // let a = 10;
  // let b = a;
  // // Tham chiếu : reference type (object, array, function)
  // let c = { name: "cybersoft", age: 1};
  // let c = [1, 2, 3];
  // let d = c;
