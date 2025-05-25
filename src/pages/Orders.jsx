import React, { useState, useEffect } from 'react';

const dummyOrders = [
  {
    _id: '1',
    items: [
      { name: 'Apple', quantity: 3, price: 1.2 },
      { name: 'Banana', quantity: 5, price: 0.5 }
    ],
    status: 'Delivered',
    totalPrice: 6.6,
    createdAt: '2025-05-20T14:48:00.000Z',
  },
  {
    _id: '2',
    items: [
      { name: 'Orange', quantity: 4, price: 0.8 },
      { name: 'Grapes', quantity: 1, price: 2.5 }
    ],
    status: 'In Progress',
    totalPrice: 5.7,
    createdAt: '2025-05-22T10:20:00.000Z',
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetch delay with dummy data
  useEffect(() => {
    const timer = setTimeout(() => {
      setOrders(dummyOrders);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div className="text-center p-6">Loading orders...</div>;

  if (orders.length === 0) return <div className="text-center p-6">You have no orders yet.</div>;

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>
      <ul className="space-y-6">
        {orders.map((order) => (
          <li key={order._id} className="border rounded-lg shadow p-5 bg-white">
            <p className="mb-2"><strong>Order ID:</strong> {order._id}</p>
            <p className="mb-2"><strong>Status:</strong> <span className={order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}>{order.status}</span></p>
            <p className="mb-3"><strong>Ordered On:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
            
            <div>
              <strong>Items:</strong>
              <ul className="ml-5 mt-1 list-disc">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} — Qty: {item.quantity} — Price: ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-3 font-semibold text-lg">Total Price: ${order.totalPrice.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
