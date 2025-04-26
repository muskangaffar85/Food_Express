import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart
  } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <Link
              to="/menu"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total Price:</span>
                <span className="text-red-600">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="flex justify-between">
          <button
            onClick={clearCart}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;