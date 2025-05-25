import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      // 1. Fixed: Added response variable to capture the API response
      const response = await axios.post('http://localhost:5000/api/v1/auth/signup', { // 2. Fixed: Changed endpoint to match backend
        name,
        email,
        password,
      });
      console.log(response.data);
      

      // 3. Fixed: Only proceed if response exists and has data
      if (response && response.data) {
        localStorage.setItem('token', response.data.token);
        toast.success('Signup successful!', {
          position: 'top-center',
          autoClose: 1500,
        });

        // Redirect after toast disappears
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      }
    } catch (error) {
      // 4. Improved error handling
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Signup failed. Please try again.';
      toast.error(errorMessage, {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={signupHandler} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
              minLength="3"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
              minLength="6"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-red-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;