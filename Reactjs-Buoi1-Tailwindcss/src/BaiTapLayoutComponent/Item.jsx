import React from 'react';

export default function Item() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full mt-8">
      {/* Cục icon nổi lên trên */}
      <div className="relative p-6 text-center  pt-10">
        <div className="bg-blue-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2">
          {/* Tạm thời để chữ i, bạn có thể thay bằng icon sau */}
          i
        </div>
        <h2 className="text-2xl font-bold mb-3 mt-2">Card Title</h2>
        <p className="text-gray-600 mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
        </p>
      </div>
      {/* Phần button ở đáy */}
      <div className="bg-gray-100 p-4 border-t border-gray-200 text-center rounded-b-lg mt-auto">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition">
          Find Out More!
        </button>
      </div>
    </div>
  );
}