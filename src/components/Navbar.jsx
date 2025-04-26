import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = ({ isLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-red-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold hover:text-yellow-200 transition">
          FoodExpress
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-yellow-200 transition font-medium">
            Home
          </Link>
          <Link to="/menu" className="text-white hover:text-yellow-200 transition font-medium">
            Menu
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-200 transition font-medium">
            About
          </Link>

          {/* If NOT Logged In: Show Login & Signup */}
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="text-white hover:text-yellow-200 transition font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-yellow-200 transition font-medium"
              >
                Signup
              </Link>
            </>
          )}

          {/* If Logged In: Show Account Dropdown */}
          {isLoggedIn && (
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="text-white hover:text-yellow-200 transition flex items-center"
              >
                <UserIcon className="h-5 w-5 mr-1" />
                Account
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Help/Support */}
          <Link to="/help" className="text-white hover:text-yellow-200 transition flex items-center">
            <QuestionMarkCircleIcon className="h-5 w-5 mr-1" />
            Help
          </Link>

          {/* Cart */}
          <Link to="/cart" className="text-white hover:text-yellow-200 transition flex items-center">
            <ShoppingCartIcon className="h-6 w-6 mr-1" />
            Cart
            {totalItems > 0 && (
              <span className="ml-1 bg-yellow-400 text-red-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="text-white hover:text-yellow-200 transition flex items-center">
            <ShoppingCartIcon className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="ml-1 bg-yellow-400 text-red-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-red-600 p-4 mt-4 space-y-4">
          <Link
            to="/"
            className="text-white hover:text-yellow-200 transition block font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-white hover:text-yellow-200 transition block font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-200 transition block font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile View: Login/Signup or Account */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-white hover:text-yellow-200 transition block font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-yellow-200 transition block font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="text-white hover:text-yellow-200 transition block font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/orders"
                className="text-white hover:text-yellow-200 transition block font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Orders
              </Link>
              <Link
                to="/logout"
                className="text-white hover:text-yellow-200 transition block font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Logout
              </Link>
            </>
          )}

          <Link
            to="/help"
            className="text-white hover:text-yellow-200 transition block font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Help & Support
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
