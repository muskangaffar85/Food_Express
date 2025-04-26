import React from 'react';
import { useParams } from 'react-router-dom';
import { food_list, menu_list } from '../assets/assets';
import FoodSlider from '../components/FoodSlider';

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  // Find category image from menu_list
  const category = menu_list.find(menu => menu.menu_name === categoryName);
  
  // Filter foods by category
  const categoryFoods = food_list.filter(food => food.category === categoryName);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          {category && (
            <img 
              src={category.menu_image} 
              alt={categoryName}
              className="w-full md:w-48 h-48 object-cover rounded-lg shadow-md mr-0 md:mr-8 mb-4 md:mb-0"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold capitalize">{categoryName}</h1>
            <p className="text-gray-600 mt-2">
              {categoryFoods.length} items available
            </p>
          </div>
        </div>

        {/* Food Items */}
        {categoryFoods.length > 0 ? (
          <FoodSlider foods={categoryFoods} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;