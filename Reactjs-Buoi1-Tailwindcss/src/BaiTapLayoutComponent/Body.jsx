import React from 'react';
import Banner from './Banner';
import Item from './Item';

export default function Body() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-6xl">
      <Banner />
      {/* Chia lưới: 1 cột cho mobile, 2 cho tablet, 4 cho desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </main>
  );
}