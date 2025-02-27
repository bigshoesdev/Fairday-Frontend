import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 39.8283, lng: -98.5795 }; // Centered in the USA

const MapContent: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAk7Mmrva4v54gtZJ4rORiC6owakIliPDE", // Replace with your API key
  });

  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);

  // Memoize zipCodes to prevent unnecessary re-renders
  const { jobConfig } = useSelector((state: any) => state);
  const zipCodes = useMemo(() => jobConfig.jobDetails.map((job) => job.city), [jobConfig.jobDetails]);

  const fetchCoordinates = useCallback(async () => {
    if (!isLoaded || zipCodes.length === 0) return;

    const results = await Promise.all(
      zipCodes.map(async (zip) => {
        const response = await fetch(
          `http://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=AIzaSyAk7Mmrva4v54gtZJ4rORiC6owakIliPDE`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          return { lat, lng };
        }
        return null;
      })
    );

    setMarkers(results.filter((m) => m !== null) as { lat: number; lng: number }[]);
  }, [isLoaded, zipCodes]);

  useEffect(() => {
    fetchCoordinates();
  }, [fetchCoordinates]);

  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
      {markers.map((position, index) => (
        <Marker key={index} position={position} />
      ))}
    </GoogleMap>
  );
};

export default MapContent;

