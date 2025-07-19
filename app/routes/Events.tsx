import React, { useState } from 'react';
import { useItinerary } from '~/context/ItineraryContext';

type EventType = {
  title: string;
  date: string;
  location: string;
};

const eventList: EventType[] = [
  {
    title: 'Kaleidoscope: A Social Media Trinity',
    date: 'March 1, 6:00 pm - March 1, 9:00 pm',
    location: 'Downtown Toronto',
  },
  {
    title: 'Instant Pop',
    date: 'March 1, 6:00 pm - March 1, 9:00 pm',
    location: 'DT Toronto',
  },
  {
    title: 'Exhibitions: Ripping off tape as Art - Balenciaga',
    date: 'March 1, 6:00 pm - 11:59 pm',
    location: 'Choroncho',
  },
  {
    title: 'Ice Bubble: The Ephemeral Art in Fusion',
    date: 'March 1, 6:00 pm - 10:00 pm',
    location: 'Torono',
  },
  {
    title: 'Lumière Maire',
    date: 'March 1, 6:00 pm - 9:00 pm',
    location: 'Tarantoe',
  },
  {
    title: 'POLARPOP',
    date: 'March 1, 6:00 pm - 9:00 pm',
    location: 'take a wild guess',
  },
];

const Events = () => {
  const [showEvents, setShowEvents] = useState(false);
  const { addToItinerary, itinerary } = useItinerary();
  const [showChat, setShowChat] = useState(false);

  const handleAddToItinerary = (event: EventType) => {
    addToItinerary(event);
    setShowChat(true);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[80vh] py-8">
      <h2 className="text-xl font-semibold tracking-widest mb-2">NUIT BLANCHE</h2>
      <h1 className="text-6xl font-black mb-2" style={{ fontFamily: 'sans-serif' }}>OUR EVENTS</h1>
      <h3 className="text-2xl font-semibold mb-8">2025</h3>
      <div className="flex gap-6 mb-12">
        <button
          className="bg-gray-200 px-8 py-3 rounded-md font-semibold text-lg shadow hover:bg-gray-300 transition"
          onClick={() => setShowEvents((v) => !v)}
        >
          Explore Events
        </button>
        <button className="bg-gray-200 px-8 py-3 rounded-md font-semibold text-lg shadow hover:bg-gray-300 transition">
          <a href="/itinerary-window">Build Itinerary</a>
        </button>
      </div>
      <hr className="w-full max-w-3xl border-t-2 border-gray-200 mb-8" />
      <div className="flex flex-row justify-center gap-20 w-full max-w-3xl mb-8">
        <div className="flex flex-col items-center">
          <span className="font-bold mb-1">Date</span>
          <svg width="40" height="40" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>
          <span className="font-medium">October 4-5</span>
          <span className="text-sm">7:00 PM- 7:00 AM</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold mb-1">Location</span>
          <svg width="40" height="40" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><path d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1 1 16 0c0 4.97-3.582 9-8 9z"/><circle cx="12" cy="12" r="3"/></svg>
          <span className="font-medium">City Wide Event</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold mb-1">Tickets</span>
          <svg width="40" height="40" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 7v10M17 7v10"/></svg>
          <span className="font-medium">Free Admission</span>
        </div>
      </div>
      <div
        className={`w-full flex justify-center transition-all duration-500 overflow-hidden ${showEvents ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} mb-8`}
        style={{
          willChange: 'max-height, opacity',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {eventList.map((event, idx) => (
            <div key={idx} className="relative bg-white border-2 border-gray-300 rounded-xl shadow p-4 flex flex-col min-h-[260px] transition hover:shadow-lg">
              <div className="w-full h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative">
                <button
                  className="absolute top-2 right-2 bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center text-2xl font-bold shadow hover:bg-gray-200 transition"
                  onClick={() => handleAddToItinerary(event)}
                >
                  +
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-md mb-1">{event.title}</div>
                  <div className="text-sm mb-1">{event.date}</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                  <svg width="16" height="16" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1 1 16 0c0 4.97-3.582 9-8 9z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showChat && (
        <div className="fixed bottom-8 right-8 bg-white border-2 border-black rounded-2xl shadow-2xl w-80 max-w-full z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-black bg-gray-100 rounded-t-2xl">
            <span className="font-bold text-lg">Your Itinerary</span>
            <button className="text-xl font-bold hover:text-red-500 transition" onClick={() => setShowChat(false)}>&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-64">
            {itinerary.length === 0 ? (
              <div className="text-gray-500 text-center">No events added yet.</div>
            ) : (
              itinerary.map((item, idx) => (
                <div key={idx} className="mb-3 p-2 rounded bg-gray-50 border border-gray-200">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.date}</div>
                  <div className="text-xs text-gray-600">{item.location}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events; 