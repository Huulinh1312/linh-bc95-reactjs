import React from 'react';

export default function Banner() {
  return (
    <div className="bg-gray-100 rounded-xl text-center py-20 px-6 mb-10">
      <h1 className="text-5xl font-bold mb-4">A warm welcome!</h1>
      <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
        Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
        Call to action
      </button>
    </div>
  );
}