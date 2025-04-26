import React, { useState, useContext } from 'react';
import { menu_list, food_list } from '../assets/assets';
import FoodCard from '../components/FoodCard';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Menu = () => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter foods by category and search query
  const filteredFoods = (selectedCategory === 'All' 
    ? food_list 
    : food_list.filter(food => food.category === selectedCategory))
    .filter(food => food.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Get category image
  const getCategoryImage = (categoryName) => {
    const category = menu_list.find(menu => menu.menu_name === categoryName);
    return category ? category.menu_image : null;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      {selectedCategory !== 'All' && (
        <div className="flex flex-col md:flex-row items-center mb-8 bg-white p-6 rounded-lg shadow-md">
          <img 
            src={getCategoryImage(selectedCategory)} 
            alt={selectedCategory}
            className="w-full md:w-48 h-48 object-cover rounded-lg mr-0 md:mr-8 mb-4 md:mb-0"
          />
          <div>
            <h1 className="text-3xl font-bold capitalize">{selectedCategory}</h1>
            <p className="text-gray-600 mt-2">
              {filteredFoods.length} delicious options available
            </p>
          </div>
        </div>
      )}

      {/* All Categories Header */}
      {selectedCategory === 'All' && (
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Our Delicious Menu</h1>
          <p className="text-gray-600">Explore all our food categories</p>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-8 relative max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } font-medium`}
          >
            All Menu
          </button>
          {menu_list.map((menu) => (
            <button
              key={menu.menu_name}
              onClick={() => {
                setSelectedCategory(menu.menu_name);
                setSearchQuery('');
              }}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === menu.menu_name
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } font-medium capitalize`}
            >
              {menu.menu_name}
            </button>
          ))}
        </div>
      </div>

      {/* Food Items Grid */}
      {filteredFoods.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food._id}
              food={food}
              onAddToCart={() => addItem(food)}
              onClick={() => navigate(`/food/${food._id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">
            {searchQuery 
              ? `No items found for "${searchQuery}"`
              : 'No items found in this category'}
          </p>
          <button 
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
          >
            Back to All Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;