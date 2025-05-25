import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Help & Support</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">How do I place an order?</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Browse the menu, add items to your cart, and proceed to checkout. You can choose your payment method and delivery address before placing the order.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Can I track my order?</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, once your order is confirmed, you'll receive real-time updates on your delivery status from the "Orders" section.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What payment methods do you accept?</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We accept Credit/Debit Cards, Stripe, Cash on Delivery, and Bank Transfer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">How do I contact support?</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              If you need help, please visit our <a href="/contact" className="text-blue-600 dark:text-blue-400 underline">Contact</a> page and fill out the form. Our team will respond within 24 hours.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What if I receive a wrong or damaged item?</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We're sorry for the inconvenience. Please report the issue via our contact page, and we'll resolve it as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
