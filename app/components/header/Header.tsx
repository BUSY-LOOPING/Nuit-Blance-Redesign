import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white py-4">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left side - Branding */}
        <div className="mb-3 md:mb-0">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Nuit Blanche
            </h1>
            <div className="flex flex-col md:flex-row md:items-baseline">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                November
              </span>
              <span className="hidden md:block md:mx-1 text-gray-300">•</span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                TORONTO
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Empty for spacing */}
        <div className="flex flex-row gap-5 items-center text-[1.2rem]">
          <a href="/events">Events</a>
          <a href="#">About</a>
          <a href="#">Socials</a>
          <div className="bg-black text-white py-4 px-7 rounded-full flex flex-row items-center gap-3">
            <a href="/itinerary-window">Itinerary</a>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
