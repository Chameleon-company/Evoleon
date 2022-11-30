import React, { createContext, useState, useEffect } from "react";
import { fetchLocations } from "../web/firebase";

export const LocationContext = createContext({
  locationFromDB: 0,
  setlocationFromDB: () => 0,
});

export const LocationProvider = ({ children }) => {
  const [locationFromDB, setlocationFromDB] = useState({});
  useEffect(() => {
    const fetchLocationMap = async () => {
      const locationMap = await fetchLocations();
      console.log(locationMap);
      setlocationFromDB(locationMap);
    };
    fetchLocationMap();
  }, []);

  const value = { locationFromDB };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
