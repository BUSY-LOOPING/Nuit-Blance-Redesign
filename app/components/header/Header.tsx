import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white py-4">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left side - Branding */}
        <div className="mb-3 md:mb-0">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Nuit Blanche</h1>
            <div className="flex flex-col md:flex-row md:items-baseline">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">November</span>
              <span className="hidden md:block md:mx-1 text-gray-300">•</span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">TORONTO</span>
            </div>
          </div>
        </div>
        
        {/* Center - Title */}
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Itinerary</h2>
        </div>
        
        {/* Right side - Empty for spacing */}
        <div className="hidden md:block w-[100px]"></div>
      </div>
    </header>
  );
};

export default Header;