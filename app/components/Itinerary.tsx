import React from 'react';

const Itinerary = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <h2 className="text-7xl md:text-5xl font-[EditorialNew] italic text-center mb-4">
        Personalize your trip to Nuit Blanche today
      </h2>
      <p className="text-center max-w-xl mb-8 text-gray-700">
        To get started login or sign up today to create your perfect night!
      </p>
      <div className="flex gap-4">
        <button className="border border-black rounded-full px-8 py-2 font-medium transition-colors duration-300 ease-in-out hover:bg-amber-100 hover:text-black hover:border-2 hover:border-black shadow-md">
          Login
        </button>
        <button className="border border-black rounded-full px-8 py-2 font-medium transition-colors duration-300 ease-in-out hover:bg-amber-100 hover:text-black hover:border-2 hover:border-black shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Itinerary; 