import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // In a real app, you would send this to your backend
    const order = {
      ...formData,
      items: cartItems,
      total: totalPrice,
      orderId: `ORD-${Date.now()}`,
      date: new Date().toISOString()
    };
    
    setOrderDetails(order);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">Thank you for your order</p>
          
          <div className="bg-gray-50 p-6 rounded-lg text-left mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="mb-2"><span className="font-medium">Order ID:</span> {orderDetails.orderId}</p>
            <p className="mb-2"><span className="font-medium">Delivery to:</span> {orderDetails.address}</p>
            <p className="mb-2"><span className="font-medium">Total:</span> ${orderDetails.total.toFixed(2)}</p>
          </div>
          
          <button
            onClick={() => navigate('/menu')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.quantity} × {item.name}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-red-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <CheckoutForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;