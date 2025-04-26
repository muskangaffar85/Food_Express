import React from 'react';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm mb-3 hover:shadow-md transition">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-20 h-20 object-cover rounded-lg"
        loading="lazy"
      />
      <div className="ml-4 flex-grow">
        <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="text-gray-500 hover:text-red-600 disabled:opacity-30"
          >
            <FiMinus size={16} />
          </button>
          <span className="mx-3 text-gray-700">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="text-gray-500 hover:text-green-600"
          >
            <FiPlus size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-lg font-bold text-red-600 mb-2">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 p-1"
          aria-label="Remove item"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;