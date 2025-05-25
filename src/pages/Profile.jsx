import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 via-pink-500 to-red-600 text-white">
        <p className="text-lg font-semibold animate-pulse">Loading profile...</p>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-400 via-pink-500 to-red-600 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform hover:scale-[1.03] transition-transform duration-300">
        <div className="relative mx-auto w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <FaUserCircle className="w-full h-full text-gray-300" />
          )}
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{user.name}</h2>

        <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 space-x-2 mb-6">
          <FaEnvelope />
          <span>{user.email}</span>
        </div>

        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
          aria-label="Logout"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
