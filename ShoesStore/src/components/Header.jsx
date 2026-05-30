import React from "react";

const Header = (props) => {
  const { onCartOpen, cartCount } = props;
  return (
    <header>
      <nav className="bg-white border-b border-slate-300 relative z-20 py-4">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 md:px-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <span className="text-3xl font-bold text-slate-900">ShoesStore</span>
          </a>

          <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-900 lg:flex">
            <li>
              <a
                href="#"
                className="transition hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              className="relative inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-white text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
              onClick={onCartOpen}
              aria-label="Mở giỏ hàng"
            >
              <i className="fa-solid fa-cart-shopping text-2xl" />
              <span className="hidden sm:inline">Giỏ hàng</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-controls="collapseMenu"
              aria-expanded="false"
              aria-haspopup="true"
              id="toggleOpen"
              className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-7 fill-slate-900"
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
