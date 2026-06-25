import React from "react";
import RapPhim from "../components/RapPhim";
import DanhSachGheDaChon from "../components/DanhSachGheDaChon";
import "../styles/booking-ui.css";

const BookingPage = () => {
  return (
    <div className="booking-background booking-shell">
      <div className="booking-overlay min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="booking-hero p-8 mb-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="heading-badge">CYBERLEARN.VN</div>
                <div>
                  <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-[0.25em]">
                    Đặt Vé Xem Phim
                  </h1>
                  <p className="hero-subtitle mt-3 max-w-3xl text-base sm:text-lg">
                    Chọn ghế, kiểm tra giá và xác nhận đơn hàng nhanh chóng. Giao diện hiện đại, phong cách rạp chiếu phim cao cấp.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-orange-400/10 bg-slate-900/80 px-6 py-4 text-slate-200 shadow-xl shadow-orange-900/10">
                <p className="uppercase text-xs tracking-[0.28em] text-orange-300 font-semibold">Thời gian chiếu</p>
                <p className="mt-3 text-2xl font-bold text-white">19:30</p>
                <p className="mt-1 text-sm text-slate-400">Rạp 7 · Phòng VIP</p>
              </div>
            </div>
          </header>

          <main className="grid gap-8 xl:grid-cols-[2.4fr_1fr]">
            <RapPhim />
            <DanhSachGheDaChon />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
