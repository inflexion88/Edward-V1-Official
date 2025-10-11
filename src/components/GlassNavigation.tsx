import React from 'react';

const GlassNavigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="elegant-nav-container px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Edward Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-orange-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-light text-sm tracking-wide">Edward</h1>
              <p className="text-white/40 text-xs font-light">Positioning Intelligence</p>
            </div>
          </div>

          {/* Right: Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400/30 animate-ping"></div>
            </div>
            <span className="text-white/70 text-xs font-light hidden sm:inline tracking-wide">Agent Online</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GlassNavigation;