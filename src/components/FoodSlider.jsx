import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FoodSlider = ({ foods }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleFoodClick = (foodId) => {
    navigate(`/food/${foodId}`);
  };

  const handleAddToCart = (e, food) => {
    e.stopPropagation();
    addItem({
      id: food._id,
      name: food.name,
      price: food.price,
      image: food.image
    });
  };

  return (
    <div className="px-4 py-8">
      <Slider {...settings}>
        {foods.map((food) => (
          <div key={food._id} className="px-2 focus:outline-none">
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all h-full cursor-pointer"
              onClick={() => handleFoodClick(food._id)}
            >
              <div className="relative">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />
                <button 
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-red-100 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle favorite logic here
                  }}
                >
                  <FaHeart className="text-gray-400 hover:text-red-500" />
                </button>
                {food.rating && (
                  <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-full flex items-center text-sm shadow">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{food.rating}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 
                  className="text-lg font-bold hover:text-red-600 transition"
                  onClick={() => handleFoodClick(food._id)}
                >
                  {food.name}
                </h3>
                <p className="text-gray-600 text-sm my-2 line-clamp-2">{food.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-red-600">${food.price.toFixed(2)}</span>
                  <button 
                    className="bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700 transition flex items-center"
                    onClick={(e) => handleAddToCart(e, food)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodSlider;