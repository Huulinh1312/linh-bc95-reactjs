import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function BaiTapThucHanhLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Body chiếm phần không gian trống ở giữa để đẩy Footer xuống đáy nếu nội dung ít */}
      <div className="">
        <Body />
      </div>
      <Footer />
    </div>
  );
}