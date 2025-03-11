import { useEffect, useRef, useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const JobLocation = ({ advertiseValue, bufferSetAdvertiseValue }) => {

  const { street, city, country } = advertiseValue
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
      });
      setMap(mapInstance);
    }
  }, []);

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
            marker.setMap(null);
          }

          const newMarker = new window.google.maps.Marker({
            position: location,
            map: map,
          });

          setMarker(newMarker);
        }
      });
    }
  }, [map, street, city, country]);

  return (
    <div className="w-full">
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-lg'}>
        <span className="sm:text-[26px] text-[20px] font-bold text-[#33495E]">Job Location*</span>

        <TextInput
          name="street"
          type="text"
          label="Street Name*"
          value={advertiseValue.street}
          onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
          style="w-full"
        />

        <TextInput
          name="city"
          type="text"
          label="City Zip*"
          value={advertiseValue.city}
          onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
          style="w-full"
        />
        <TextInput
          name='country'
          type="text"
          label="Country*"
          value={advertiseValue.country}
          onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
          style="w-full"
        />

        <span className="sm:text-[26px] text-[20px font-bold text-[#33495E]">Pinpoint Map Location (Optional)</span>
        <div
          ref={mapContainerRef}
          style={{ width: '100%', height: '400px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        ></div>
      </Panel>
    </div>
  );
};

export default JobLocation;
