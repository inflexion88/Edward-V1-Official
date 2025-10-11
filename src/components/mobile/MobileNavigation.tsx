
import React from 'react';
import { Home, Settings, Info } from 'lucide-react';

const MobileNavigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-center space-x-6">
          <button className="text-white/80 hover:text-white transition-all duration-200 p-2 hover:bg-white/10 rounded-lg">
            <Home size={20} />
          </button>
          <button className="text-white/80 hover:text-white transition-all duration-200 p-2 hover:bg-white/10 rounded-lg">
            <Settings size={20} />
          </button>
          <button className="text-white/80 hover:text-white transition-all duration-200 p-2 hover:bg-white/10 rounded-lg">
            <Info size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
