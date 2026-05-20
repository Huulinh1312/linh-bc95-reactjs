// Dùng lệnh rafce
import React from 'react'

const Header = () => {
  const navLinks = [
    { text: 'Home' },
    { text: 'Women' },
    { text: 'Men' },
    { text: 'Kids' },
    { text: 'Accessories' },
    { text: 'Sale' },
    { text: 'Marketing' }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden bg-[url('https://devwares-pull-zone.b-cdn.net/mockimages/backgroun7d.png')] bg-no-repeat bg-cover" > <nav className="bg-transparent relative z-10 backdrop-filter backdrop-blur-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center justify-between h-16 bg-transparent flex">
            <div className="items-center flex">
              <div className="flex-shrink-0">
                <img alt="" src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png" className="invert h-6 w-auto" />
              </div>
              <div className="md:block hidden">
                <div className="ml-10 items-baseline flex space-x-4">
                  {navLinks.map((link, index) => (
                    <a key={index} href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-indigo-600" > {link.text} </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:block hidden">
              <div className="ml-4 items-center flex space-x-4">
                <a href="#" className="text-white hover:text-indigo-600" >
                  <span className="items-center justify-center h-6 w-6 text-white flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_nl8N2StjT" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" ></path> </svg>
                  </span>
                </a>
                <a href="#" className="text-white hover:text-indigo-600" >
                  <span className="items-center justify-center h-6 w-6 text-white flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_mmXpJn34h" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" ></path> </svg>
                  </span>
                </a>
                <a href="#" className="text-white hover:text-indigo-600 relative" >
                  <span className="items-center justify-center h-6 w-6 text-white flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_bXnoD7R3n" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" ></path> </svg>
                  </span>
                  <span
                    className="h-5 w-5 text-xs bg-indigo-600 text-white rounded-full items-center justify-center absolute -top-2 -right-2 flex"
                  >3</span>
                </a>
              </div>
            </div>
            <div className="md:hidden -mr-2 flex">
              <button type="button" className="inline-flex p-2 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 items-center justify-center rounded-md text-white" >
                <span className="items-center justify-center h-6 w-6 text-white flex">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_p206YVbJk" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" ></path> </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-8 pb-16 sm:pt-12 lg:pb-10 sm:pb-12 lg:pt-8 relative z-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-10">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight" > Redefine Your <br /> <span className="text-transparent bg-gradient-to-r bg-clip-text from-gray-50 to-white" >Style Identity</span> </p>
              <p className="mt-6 text-lg text-white max-w-lg">
                Discover the latest fashion trends and express yourself with our
                curated collection of premium clothing and accessories.
              </p>
              <div className="mt-8 sm:flex-row flex flex-col gap-4">
                <button type="button" className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 justify-center rounded-md py-3 px-6 bg-indigo-600 text-base font-medium text-white shadow-sm" > Shop Now </button>
                <button type="button" className="inline-flex border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-gray-50 justify-center rounded-md py-3 px-6 bg-white text-base font-medium text-gray-700 shadow-sm" > View Collections </button>
              </div>
              <div className="mt-10">
                <div className="items-center flex space-x-6">
                  <div className="items-center flex">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" > <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" ></path> </svg>
                    ))}
                    <span className="ml-2 text-white lg:text-gray-700">5000+ happy customers</span>
                  </div>
                  <div className="items-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_SSo13s15m" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" ></path> </svg>
                    <span className="ml-2 text-white lg:text-gray-700">Free shipping</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="w-72 h-72 bg-gradient-to-bl rounded-full absolute -top-8 -right-8 from-indigo-300 to-purple-400 opacity-30 blur-xl"
              ></div>
              <div className="relative">
                <img alt="Fashion model wearing stylish clothing from the latest collection" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover rounded-xl shadow-xl w-full" />
                <div
                  className="bg-white rounded-lg shadow-lg absolute bottom-4 left-4 right-4 bg-opacity-90 backdrop-filter backdrop-blur-sm p-4"
                >
                  <p className="text-gray-900 font-medium">Summer 2023 Collection</p>
                  <p className="text-indigo-600 font-bold text-lg">Up to 40% Off 🎉</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Header