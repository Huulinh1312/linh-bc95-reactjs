import React, { useEffect, useRef, useState } from "react";
import ProductList from "./ProductList";
import products from "./data.json";
import Modal from "./Modal";
import Header from "./Header";
import Cart from "./Cart";

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimeoutRef = useRef(null);

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
    setToastMessage("Thêm vào giỏ hàng thành công");
    setIsToastVisible(true);

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setIsToastVisible(false);
    }, 800);
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

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      {/* Header */}
      <Header onCartOpen={handleCartOpen} cartCount={totalItems} />

      {isToastVisible && (
        <div className="fixed top-5 right-5 z-50 w-full max-w-xs rounded-3xl border border-emerald-200 bg-emerald-600 text-white shadow-2xl shadow-emerald-900/30 px-4 py-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M9 12.75L6.75 10.5 5.5 11.75 9 15.25 19 5.25 17.75 4 9 12.75z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold">Thành công</p>
              <p className="mt-1 text-sm text-emerald-100">{toastMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-8 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-[#071226] via-[#0b2540] to-[#071226] p-8 md:p-10 text-white shadow-2xl">
          <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Ưu đãi giới hạn
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                Mua ngay — Nhận ưu đãi lớn
              </h2>
              <p className="mt-4 text-sm text-slate-300 max-w-xl">
                Nhận ưu đãi 25% cho đơn hàng đầu tiên và giao hàng miễn phí trong hôm nay. Khuyến mãi có hạn — đừng bỏ lỡ.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-300 transition"
                >
                  Mua ngay
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
                >
                  Xem bộ sưu tập mới
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="relative rounded-2xl overflow-hidden bg-white/5 p-3">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
                  alt="sneaker banner"
                  className="w-full h-56 md:h-64 object-cover rounded-lg shadow-lg"
                />

                <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-md">

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid Wrapper */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[32px] p-6 md:p-8 shadow-xl">
          <ProductList
            productsData={products}
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
        products={products}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
      />
    </div>
  );
};

export default ShoesStore;
