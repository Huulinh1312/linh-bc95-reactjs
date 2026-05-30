import React from "react";

const ProductItem = (props) => {
  const { item, handleOpenDetail, onAddToCart } = props;
  const handleAddToCart = () => {
    onAddToCart(item.id);
  };

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden bg-slate-900">
        <img
          src={item.image}
          alt={item.name}
          className="h-72 w-full object-contain transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
            New
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur">
            {item.quantity} in stock
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6 text-slate-900">
        <div>
          <h2 className="text-xl font-bold tracking-tight">{item.name}</h2>
          <p className="mt-2 text-sm text-slate-500 line-clamp-2">
            {item.shortDescription}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="block text-sm text-slate-500">Price</span>
            <p className="text-2xl font-extrabold text-slate-950">${item.price}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            onClick={() => handleOpenDetail(item)}
          >
            Xem chi tiết
          </button>
          <button
            className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
