import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // use auth context

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { totalItems } = useCart();
  const { isLoggedIn, logout } = useAuth(); // from auth context

  return (
    <nav className="bg-red-600 p-4 shadow sticky top-0 z-50">
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

          {/* Auth Links */}
          {!isLoggedIn ? (
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
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          ) : (
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
                  <button
                    onClick={() => {
                      logout();
                      setIsUserDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Help */}
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
      </div>
    </nav>
  );
};

export default Navbar;
