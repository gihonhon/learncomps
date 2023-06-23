import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate()

    return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                className="w-14"
                src="/logocom.png"
                alt="Logo"
              />
              <h1 className='text-xl font-bold text-white'>Component</h1>
            </div>
            {/* Navigation links */}
            <div className="flex">
              <button
                onClick={() => navigate('/')}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/about')} 
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
