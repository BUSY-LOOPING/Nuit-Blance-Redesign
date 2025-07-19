import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type EventType = {
  title: string;
  date: string;
  location: string;
};

interface ItineraryContextType {
  itinerary: EventType[];
  addToItinerary: (event: EventType) => void;
  removeFromItinerary: (index: number) => void;
  clearItinerary: () => void;
}

const ItineraryContext = createContext<ItineraryContextType | undefined>(undefined);

export const useItinerary = () => {
  const context = useContext(ItineraryContext);
  if (context === undefined) {
    throw new Error('useItinerary must be used within an ItineraryProvider');
  }
  return context;
};

interface ItineraryProviderProps {
  children: ReactNode;
}

export const ItineraryProvider: React.FC<ItineraryProviderProps> = ({ children }) => {
  const [itinerary, setItinerary] = useState<EventType[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nuit-blanche-itinerary');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nuit-blanche-itinerary', JSON.stringify(itinerary));
    }
  }, [itinerary]);

  const addToItinerary = (event: EventType) => {
    setItinerary((prev) => [...prev, event]);
  };

  const removeFromItinerary = (index: number) => {
    setItinerary((prev) => prev.filter((_, i) => i !== index));
  };

  const clearItinerary = () => {
    setItinerary([]);
  };

  const value = {
    itinerary,
    addToItinerary,
    removeFromItinerary,
    clearItinerary,
  };

  return (
    <ItineraryContext.Provider value={value}>
      {children}
    </ItineraryContext.Provider>
  );
}; 