import React, { useEffect, useRef, useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const JobLocation = ({ street, setStreet, city, setCity, country, setCountry }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null); // Track the marker

  // Initialize the Google Map
  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
        zoom: 12,
      });
      setMap(mapInstance);
    }
  }, []);

  // Use Google Maps Geocoding API to fetch coordinates based on street, city, and country
  useEffect(() => {
    if (map) {
      if (!street || !city || !country) {
        // If any field is empty, remove the existing marker
        if (marker) {
          marker.setMap(null);
          setMarker(null);
        }
        return; // Stop execution if input fields are empty
      }

      const geocoder = new window.google.maps.Geocoder();
      const address = `${street}, ${city}, ${country}`;

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location); // Set the map center to the geocoded location

          // Remove previous marker if it exists
          if (marker) {
            marker.setMap(null);
          }

          // Set new marker
          const newMarker = new window.google.maps.Marker({
            position: location,
            map: map,
          });

          setMarker(newMarker); // Store marker in state
        }
      });
    }
  }, [map, street, city, country]);

  return (
    <div className="w-full">
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-lg'}>
        <span className="text-[26px] font-bold text-[#33495E]">Job Location*</span>

        <TextInput
          type="text"
          label="Street Name*"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          style="w-full"
        />

        <TextInput
          type="text"
          label="City Zip*"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style="w-full"
        />
        <TextInput
          type="text"
          label="Country*"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style="w-full"
        />

        <div
          ref={mapContainerRef}
          style={{ width: '100%', height: '400px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        ></div>
      </Panel>
    </div>
  );
};

export default JobLocation;
