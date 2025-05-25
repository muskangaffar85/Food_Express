import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // { name, email, profileImage }
  const [token, setToken] = useState(null);    // JWT

  // On mount: load from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      // fetch profile
      axios.get('/api/users/profile')
        .then(res => setUser(res.data))
        .catch(() => logout());
    }
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post('/api/users/login', { email, password });
    localStorage.setItem('token', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    setToken(data.token);
    setUser(data.user);
  };

  const signup = async (name, email, password, profileImage) => {
    const { data } = await axios.post('/api/users/signup', { name, email, password, profileImage });
    localStorage.setItem('token', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn: Boolean(user),
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
