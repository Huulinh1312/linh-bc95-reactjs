import React from 'react';

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
        <a href="#" className="text-xl font-bold">Start Bootstrap</a>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300 font-medium text-white">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}