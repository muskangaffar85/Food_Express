import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { food_list } from '../assets/assets';
import FoodSlider from '../components/FoodSlider';
import { FaStar, FaClock, FaFireAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const FoodDetail = () => {
  const { foodId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Find the food item by ID
  const foodItem = food_list.find(food => food._id === foodId);
  
  // If food item not found, redirect or show error
  if (!foodItem) {
    return <div className="text-center py-20">Food item not found</div>;
  }
  
  // Get related foods (same category)
  const relatedFoods = food_list.filter(
    food => food.category === foodItem.category && food._id !== foodItem._id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      id: foodItem._id,
      name: foodItem.name,
      price: foodItem.price,
      image: foodItem.image,
      quantity: quantity
    });
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 text-red-600 hover:text-red-800 font-medium flex items-center"
        >
          ← Back to menu
        </button>
        
        {/* Food Detail Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Food Image */}
            <div className="md:w-1/2">
              <img 
                src={foodItem.image} 
                alt={foodItem.name} 
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Food Info */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-2">{foodItem.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < foodItem.rating ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <span className="text-gray-600">{foodItem.rating} ({foodItem.reviews} reviews)</span>
              </div>
              
              <p className="text-gray-700 mb-6">{foodItem.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <FaClock className="text-red-500 mr-2" />
                  <span>{foodItem.time} mins</span>
                </div>
                <div className="flex items-center">
                  <FaFireAlt className="text-red-500 mr-2" />
                  <span>{foodItem.calories} cal</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-red-600">${foodItem.price}</span>
                <div className="flex items-center">
                  <button 
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xl"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="mx-4 text-xl">{quantity}</span>
                  <button 
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xl"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        {/* Related Foods Section */}
        {relatedFoods.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <FoodSlider foods={relatedFoods} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDetail;