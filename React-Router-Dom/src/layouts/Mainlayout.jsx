import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
const Mainlayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Outlet là nơi sẽ render các component con tương ứng với route */}
      {/* VD: /about => Outlet -> About page */}
      {/* /profile => Outlet -> Profile page */}
      <main className="flex-1 pt-16 pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
