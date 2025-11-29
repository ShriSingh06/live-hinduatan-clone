import React, { useState } from 'react';
import { CATEGORIES } from '../services/newsService';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const currentDate = new Date().toLocaleDateString('hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top Bar - Date & Utilities */}
        <div className="hidden md:flex justify-between items-center bg-gray-100 px-4 py-1 text-xs text-gray-600 border-b">
            <span>{currentDate} | New Delhi</span>
            <div className="flex gap-4">
                <span className="cursor-pointer hover:text-[#cc0000]">E-Paper</span>
                <span className="cursor-pointer hover:text-[#cc0000]">Sign In</span>
            </div>
        </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                ☰
            </button>
            
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-black text-[#cc0000] tracking-tighter leading-none">
                    हिन्दुस्तान
                </h1>
                <span className="text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase">
                    LiveHindustan.com
                </span>
            </Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-1 w-1/3">
            <input 
                type="text" 
                placeholder="Search news..." 
                className="flex-grow outline-none text-sm bg-transparent"
            />
            <button className="text-gray-500">🔍</button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#cc0000] text-white overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto flex px-2 md:px-0">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.slug === '/' ? '/' : `/category/${cat.slug}`}
              className={`px-4 py-3 text-sm font-bold border-b-4 hover:bg-red-800 transition-colors ${
                  (location.pathname === '/' && cat.slug === '/') || location.pathname === `/category/${cat.slug}`
                   ? 'border-white' 
                   : 'border-transparent'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
                <div className="bg-white w-3/4 h-full p-4 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-bold text-lg">Menu</span>
                        <button onClick={() => setIsMenuOpen(false)} className="text-2xl">×</button>
                    </div>
                    <ul className="space-y-4">
                        {CATEGORIES.map(cat => (
                            <li key={cat.id}>
                                <Link 
                                    to={cat.slug === '/' ? '/' : `/category/${cat.slug}`} 
                                    className="block text-gray-800 font-semibold border-b pb-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {cat.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </header>
  );
};