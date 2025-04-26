import React from 'react';
import { motion } from 'framer-motion'; // for animation

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-orange-500 flex items-center justify-center text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
          Welcome to Food Express
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Fast, Fresh, and Delicious
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            At <span className="text-orange-500 font-semibold">Food Express</span>, we are passionate about delivering your favorite meals right to your doorstep — hot, fresh, and bursting with flavor. 
            Our goal is to make every meal special and every experience delightful.
          </p>
        </motion.div>

        {/* 3 Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-orange-500 mb-4">Lightning Fast Delivery</h3>
            <p className="text-gray-600">
              Get your favorite dishes delivered to you in record time. We value your hunger!
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-orange-500 mb-4">Diverse Food Options</h3>
            <p className="text-gray-600">
              Choose from a wide range of restaurants and cuisines — from local favorites to global delights.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-orange-500 mb-4">Top-notch Service</h3>
            <p className="text-gray-600">
              Enjoy smooth ordering, real-time tracking, and responsive customer support at every step.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To bring people closer to their favorite foods by providing a fast, friendly, and reliable food delivery service that prioritizes taste, quality, and customer satisfaction.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 flex justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="/menu"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Explore Our Menu
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
