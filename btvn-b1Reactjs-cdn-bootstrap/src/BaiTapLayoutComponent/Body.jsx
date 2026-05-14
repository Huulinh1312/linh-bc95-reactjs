import React from 'react';
import Banner from './Banner';
import Item from './Item';

export default function Body() {
  return (
    <div className="container px-lg-5">
      {/* Component Banner */}
      <Banner />
      
      {/* Component Item được chia lưới (Grid) */}
      <div className="row gx-lg-5 text-center mb-5">
        <div className="col-lg-3 col-md-6 mb-4"><Item /></div>
        <div className="col-lg-3 col-md-6 mb-4"><Item /></div>
        <div className="col-lg-3 col-md-6 mb-4"><Item /></div>
        <div className="col-lg-3 col-md-6 mb-4"><Item /></div>
      </div>
    </div>
  );
}