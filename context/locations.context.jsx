import React, { createContext, useState, useEffect } from "react";
import { fetchLocations } from "../web/firebase";

// Initial value for the LocationContext
const LocationContextInitialValue = {
  locationFromDB: 0,
  setlocationFromDB: () => null,
};

// Create the context
export const LocationContext = createContext(LocationContextInitialValue);

// Define the Provider component for the LocationContext
export const LocationProvider = ({ children }) => {
  // Use state to keep track of the location from the database
  const [locationFromDB, setlocationFromDB] = useState({});

  // Use an effect to fetch location data when the component mounts
  useEffect(() => {
    const fetchLocationMap = async () => {
      // Fetch location data from the database
      const locationMap = await fetchLocations();

      // Uncomment the next line if you need to debug (but avoid committing this in production code)
      // console.log(locationMap);

      // Update the location data state
      setlocationFromDB(locationMap);
    };

    // Call the fetch function
    fetchLocationMap();
  }, []); // Empty dependency array means this effect runs once on mount

  // Value to be provided to children components
  const value = { locationFromDB, setlocationFromDB };

  // Provide the state and updater to children
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
