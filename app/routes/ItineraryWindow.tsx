import React, { useState } from 'react';
import { useItinerary } from '~/context/ItineraryContext';

type EventType = {
  title: string;
  date: string;
  location: string;
};

const ItineraryWindow = () => {
  const { itinerary, removeFromItinerary, addToItinerary } = useItinerary();

  const handleSaveItinerary = () => {
    alert('Itinerary saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Your Itinerary</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Events: {itinerary.length}</span>
              <a href="/events" className="text-blue-600 hover:text-blue-800 transition">
                ← Back to Events
              </a>
            </div>
          </div>
          
          {itinerary.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-xl mb-4">No events in your itinerary yet.</div>
              <a href="/events" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Explore Events
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {itinerary.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{item.title}</div>
                    <div className="text-gray-600">{item.date}</div>
                    <div className="text-gray-600">{item.location}</div>
                  </div>
                  <button
                    className="ml-4 text-xl font-bold text-gray-400 hover:text-red-500 transition p-2"
                    title="Remove"
                    onClick={() => removeFromItinerary(idx)}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <div className="mt-8 text-center">
                <button 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg"
                  onClick={handleSaveItinerary}
                >
                  Save Itinerary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryWindow; 