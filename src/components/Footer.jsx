import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* About Section */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold flex items-center">
              <MdDeliveryDining className="text-red-500 mr-2 text-3xl" />
              FoodExpress
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Premium food delivery service bringing gourmet experiences to your doorstep since 2015. 
              We partner with the finest restaurants to deliver exceptional quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-red-600 transition p-3 rounded-full">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 transition p-3 rounded-full">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 transition p-3 rounded-full">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 transition p-3 rounded-full">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 transition p-3 rounded-full">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition flex items-center">
                <span className="w-2 h-2 bg-red-500 mr-3 rounded-full"></span>
                About Us
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition flex items-center">
                <span className="w-2 h-2 bg-red-500 mr-3 rounded-full"></span>
                Our Services
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition flex items-center">
                <span className="w-2 h-2 bg-red-500 mr-3 rounded-full"></span>
                Menu
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition flex items-center">
                <span className="w-2 h-2 bg-red-500 mr-3 rounded-full"></span>
                Promotions
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition flex items-center">
                <span className="w-2 h-2 bg-red-500 mr-3 rounded-full"></span>
                Career Opportunities
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mt-1 mr-3" />
                <span>123 Gourmet Avenue, Food District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-red-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-red-500 mr-3" />
                <span>contact@foodexpress.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-red-500 mr-3" />
                <span>24/7 Service</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, special offers, and culinary inspiration.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 transition w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center"
              >
                Subscribe Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
            <div className="mt-6 flex items-center space-x-2">
              <img src={assets.app_store} alt="App Store" className=" w-20 cursor-pointer hover:opacity-80 transition" />
              <img src={assets.play_store} alt="Google Play" className=" w-20 cursor-pointer hover:opacity-80 transition" />
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FoodExpress. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">Sitemap</a>
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
