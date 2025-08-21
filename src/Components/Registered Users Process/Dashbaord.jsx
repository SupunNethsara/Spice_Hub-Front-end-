import React, { useContext, useEffect, useState } from 'react';
import { FiPower, FiSettings } from 'react-icons/fi';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';
import { BsFire } from 'react-icons/bs';
import { UserContext } from '../Use Context/useProvider';
import axios from 'axios';
import { Logout } from '@mui/icons-material';
import LogoutModal from './Routing Components/LogoutModal';
import IncompleteProfileModal from '../UserConnect/IncompleteProfileModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const { user, setUser } = useContext(UserContext);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [showIncompleteProfileModal, setShowIncompleteProfileModal] = useState(false);
  const [hasCheckedProfile, setHasCheckedProfile] = useState(false);
  
  const handleLogoutClick = () => {
    setIsLogoutModalOpen(!isLogoutModalOpen);
  }

  useEffect(() => {
    if (user && user.details && !user.details_complete && !hasCheckedProfile) {
      const timer = setTimeout(() => {
        setShowIncompleteProfileModal(true);
        setHasCheckedProfile(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [user, hasCheckedProfile]);

  const categories = [
    { name: 'All', path: 'all' },
    { name: 'Spices', path: '' },
    { name: 'Herbs', path: '' },
    { name: 'Blends', path: '' },
    { name: 'Seasonings', path: '' },
    { name: 'Specialty', path: '' }
  ];

  const getActiveCategory = () => {
    const currentPath = location.pathname;
    const matchedCategory = categories.find(cat =>
      currentPath === cat.path
    );
    return matchedCategory ? matchedCategory.name : 'All';
  };

  const activeCategory = getActiveCategory();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/user-Logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';

      return response.data;
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  if (!localStorage.getItem('token')) {
    window.location.href = '/';
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate('/dashboard')}
            >
              <BsFire className="text-2xl mr-2" />
              <span className="text-xl font-bold">SpiceHub</span>
            </div>

            <div className="hidden md:flex flex-1 mx-8">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search spices, blends, herbs..."
                  className="w-full py-3 px-5 pr-12 rounded-full bg-white text-gray-800 focus:outline-none 
                  border border-gray-200 focus:border-red-400 shadow-sm transition-all
                  hover:shadow-md focus:shadow-lg focus:ring-2 focus:ring-red-100"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 
                      p-2 bg-red-600 text-white rounded-full hover:bg-red-700
                      transition-colors shadow-md hover:shadow-lg focus:outline-none
                      focus:ring-2 focus:ring-red-300 focus:ring-offset-2">
                  <FiSearch className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-1 hover:text-red-200">
                <FiUser />
                <span>{user?.name || 'Account'}</span>
              </button>
              <button
                className="relative hover:text-red-200"
              >
                <FiSettings />
              </button>
              <button
                className="relative hover:text-red-200"
              >
                <FiShoppingCart />
                <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">5</span>
              </button>
              <button
                onClick={() => handleLogoutClick()}
                className="flex items-center justify-center p-2 text-white  hover:text-gray-100 transition-colors group relative"
                aria-label="Logout"
              ><FiPower className="w-5 h-5" />
                <span className="absolute top-0 right-0 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                </span>
              </button>
            </div>
          </div>

          <div className="mt-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for spices..."
                className="w-full py-2 px-4 rounded-full bg-gray-500/70 text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-2 text-gray-500">
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex space-x-6">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`whitespace-nowrap px-3 py-1 rounded-full ${activeCategory === category.name
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
                onClick={() => navigate(category.path)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      {isLogoutModalOpen && (
        <LogoutModal
          onClose={() => setIsLogoutModalOpen(false)}
          onLogout={handleLogout}
        />
      )}
      {showIncompleteProfileModal && (
        <IncompleteProfileModal
          onClose={() => {
            setShowIncompleteProfileModal(false);
            if (setUser) {
              setUser(prev => ({ ...prev, details_complete: true }));
            }
          }}
        />
      )}
      <main className="container mx-auto px-4 py-6">

        <Outlet />
      </main>

    </div>
  );
};

export default Dashboard;