import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Branding */}
            <div>
                 <h2 className="text-3xl font-black text-white mb-2">हिन्दुस्तान</h2>
                 <p className="text-gray-400 text-sm">
                    LiveHindustan.com is India's leading Hindi News website. We provide the latest news on Politics, Cricket, Entertainment, and more.
                 </p>
            </div>

            {/* Links */}
            <div>
                <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white">Advertise</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
            </div>

             {/* Categories */}
             <div>
                <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Popular Categories</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                    <li><a href="#" className="hover:text-white">Cricket</a></li>
                    <li><a href="#" className="hover:text-white">Entertainment</a></li>
                    <li><a href="#" className="hover:text-white">Technology</a></li>
                    <li><a href="#" className="hover:text-white">Astrology</a></li>
                </ul>
            </div>

            {/* Social */}
            <div>
                <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Follow Us</h3>
                <div className="flex space-x-4">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">f</span>
                    <span className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center cursor-pointer">t</span>
                    <span className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer">i</span>
                    <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">y</span>
                </div>
            </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>© 2024 LiveHindustan Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};