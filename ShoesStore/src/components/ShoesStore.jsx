import React, { useState } from "react";
import ProductList from "./ProductList";
import dataShoes from "./data.json";
import Modal from "./Modal ";
import Header from "./Header";
import Cart from "./Cart";

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(null);

  //state cart
  const [cart, setCart] = useState({});
  //Đóng mở cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenDetail = (product) => {
    setProductDetail(product);
  };
  const handleCloseProductDetail = () => {
    setProductDetail(null);
  };
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };
  const handleCartClose = () => {
    setIsCartOpen(false);
  };
  const handleAddToCart = (productId) => {
    const currentQty = cart[productId] || 0;

    const newCart = {
      ...cart,
      [productId]: currentQty + 1,
    };
    setCart(newCart);
  };
  const handleIncreaseQty = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleDecreaseQty = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      // chỉ giảm khi số lượng > 1
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      }

      return newCart;
    });
  };
  // Tạo biến totalItems tính tổng số lượng sản phẩm trong cart
  const listQty = Object.values(cart);
  const totalItems = listQty.reduce((sum, Qty) => sum + Qty, 0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      {/* Header */}
      <Header onCartOpen={handleCartOpen} cartCount={totalItems} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-700 rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative">
          {/* Background blur */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-5 backdrop-blur">
                New Collection 2026
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Discover Your
                <span className="block text-cyan-300">Perfect Shoes</span>
              </h1>

              <p className="text-blue-100 mt-5 text-lg leading-relaxed max-w-lg">
                Premium sneakers with modern design, comfort, and style for your
                everyday lifestyle.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-7 py-3 rounded-2xl bg-white text-blue-700 font-bold hover:scale-105 transition duration-300 shadow-lg">
                  Shop Now
                </button>

                <button className="px-7 py-3 rounded-2xl border border-white/30 text-white font-bold hover:bg-white/10 transition duration-300">
                  Explore More
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_617,c_limit/159e1476-264a-41fb-a6e5-5c7dab6489b1/nike-just-do-it.png"
                alt="hero-shoes"
                className="w-full max-w-lg drop-shadow-[0_30px_30px_rgba(0,0,0,0.35)] hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">
              Trending Sneakers
            </h2>

            <p className="text-slate-500 mt-2">
              Discover the latest trending shoes collection
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow hover:shadow-lg font-semibold text-slate-700 transition">
            View All
          </button>
        </div>

        {/* Product Grid Wrapper */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[32px] p-6 md:p-8 shadow-xl">
          <ProductList
            dataShoes={dataShoes}
            handleOpenDetail={handleOpenDetail}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      {/* Modal */}
      <Modal
        content={productDetail}
        onCloseHandleDetail={handleCloseProductDetail}
        onAddToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart
        isCartOpen={isCartOpen}
        cart={cart}
        onCloseCart={handleCartClose}
        products={dataShoes}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
      />
    </div>
  );
};

export default ShoesStore;
