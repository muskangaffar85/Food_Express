import React from 'react';
import FoodSlider from '../components/FoodSlider';
import { food_list, menu_list } from '../assets/assets'; // Import menu_list from assets
import { FaMotorcycle, FaClock, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Get random foods for different sections
  const featuredFoods = [...food_list].sort(() => 0.5 - Math.random()).slice(0, 8);
  const discountFoods = [...food_list].sort(() => 0.5 - Math.random()).slice(0, 4);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "The fastest delivery in town! Food arrived hot and delicious.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      comment: "Amazing variety of restaurants to choose from. Never disappoints!",
      rating: 4
    },
    {
      id: 3,
      name: "Emma Williams",
      comment: "The app is so easy to use and the customer service is excellent.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">Savor the Flavor</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Order delicious food from the best restaurants in town, delivered fast to your doorstep
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition duration-300 transform hover:scale-105">
              Browse Menu
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="text-red-500 text-4xl mb-4 flex justify-center">
                <FaMotorcycle />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in under 30 minutes or get it for free</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="text-red-500 text-4xl mb-4 flex justify-center">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Food</h3>
              <p className="text-gray-600">Only the best restaurants partnered with us to serve you</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="text-red-500 text-4xl mb-4 flex justify-center">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Craving something at midnight? We've got you covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Food Slider */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Items</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Discover our most popular dishes loved by thousands of customers
        </p>
        <FoodSlider foods={featuredFoods} />
      </div>

      {/* Popular Categories */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Menu Categories</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Browse through our wide variety of cuisines
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {menu_list.map((menu, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                onClick={() => navigate(`/category/${menu.menu_name}`)} // Navigate to Category Page
              >
                <div className="h-40 bg-red-100 flex items-center justify-center">
                  <img src={menu.menu_image} alt={menu.menu_name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{menu.menu_name}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {food_list.filter(food => food.category === menu.menu_name).length}+ options
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
              <p className="text-gray-700 mb-6">
                Enjoy our limited-time offers and save big on your favorite meals. 
                Use code <span className="font-bold text-red-600">HUNGRY20</span> to get 20% off your first order.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Free delivery on orders over $20</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Combo meals with 15% discount</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Loyalty points with every order</span>
                </li>
              </ul>
              <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300">
                Claim Your Discount
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {discountFoods.map((food, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-32 bg-gray-200 flex items-center justify-center">
                    <img src={food.image} alt={food.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold">{food.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-red-600 font-bold">${food.price}</span>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">-20%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Getting your favorite food has never been easier
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Choose Your Food</h3>
              <p className="text-gray-600">Browse hundreds of restaurants and select your favorite dishes</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Pay online with your credit card or cash on delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Track your order in real-time until it arrives at your door</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-red-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to order your favorite food?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our app now and get exclusive discounts on your first order!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center justify-center">
              <span className="mr-2">Download on the</span>
              <span className="text-xl">App Store</span>
            </button>
            <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
              <span className="mr-2">Get it on</span>
              <span className="text-xl">Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
