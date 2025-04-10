import { useEffect, useRef, useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';
import JobLocationMap from 'src/pages/jobPost/JobLocationMap';

const JobLocation = ({ jobValue, bufferSetJobValue }) => {

  const { street, city, country } = jobValue;
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  // Initialize the map only once
  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12,
      });
      setMap(mapInstance);
    }
  }, [map]);

  // Update the marker and map location based on address changes
  useEffect(() => {
    if (map) {
      if (!street || !city || !country) {
        if (marker) {
          marker.setMap(null);
          setMarker(null);
        }
        return;
      }

      const geocoder = new window.google.maps.Geocoder();
      const address = `${street}, ${city}, ${country}`;

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location);

          if (marker) {
            marker.setMap(null); // Remove the old marker
          }

          const newMarker = new window.google.maps.Marker({
            position: location,
            map: map,
            title: 'Job Location', // Tooltip for the marker
          });

          setMarker(newMarker);
        }
      });
    }
  }, [map]);

  return (
    <div className="w-full">
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-lg'}>
        <span className="sm:text-[26px] text-[20px] font-bold text-[#33495E]">Job Location*</span>

        <TextInput
          name="street"
          type="text"
          label="Street Name*"
          value={jobValue.street}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value, userStreet: e.target.value })}
          style="w-full"
        />

        <TextInput
          name="city"
          type="text"
          label="City Zip*"
          value={jobValue.city}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value, userCity: e.target.value })}
          style="w-full"
        />
        <TextInput
          name='country'
          type="text"
          label="Country*"
          value={jobValue.country}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value, userCountry: e.target.value })}
          style="w-full"
        />

        <JobLocationMap
          jobValue={jobValue.country}
          bufferSetJobValue={(updatedJobValue: any) => bufferSetJobValue({ ...updatedJobValue })}
        />
      </Panel>
    </div>
  );
};

export default JobLocation;