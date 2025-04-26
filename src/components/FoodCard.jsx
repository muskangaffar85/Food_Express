import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const FoodCard = ({ food, onClick }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem({
      id: food._id,
      name: food.name,
      price: food.price,
      image: food.image
    });
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={food.image} 
          alt={food.name}
          className="w-full h-48 object-cover"
        />
        <button 
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-red-100 transition"
          onClick={(e) => {
            e.stopPropagation();
            // Handle favorite
          }}
        >
          <FaHeart className="text-gray-400 hover:text-red-500" />
        </button>
        {food.rating && (
          <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full flex items-center text-sm shadow">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{food.rating}</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold mb-1 hover:text-red-600">{food.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{food.description}</p>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-red-600">${food.price.toFixed(2)}</span>
          <button 
            className="bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition flex items-center"
            onClick={handleAddToCart}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;