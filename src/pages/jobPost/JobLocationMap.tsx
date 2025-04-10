import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // San Francisco as the initial center
  lng: -122.4194,
};

const apiKey = 'AIzaSyAk7Mmrva4v54gtZJ4rORiC6owakIliPDE';

const MapWithLocationInfo = ({ jobValue, bufferSetJobValue }: any) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);

  const onMapClick = useCallback((e) => {
    const latLng = e.latLng;
    setSelectedLocation(latLng);

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const address = results[0].formatted_address;
        setLocationInfo(address);

        let street = '';
        let cityZip = '';
        let country = '';
        let lat = latLng.lat();
        let lng = latLng.lng();
        bufferSetJobValue({ ...jobValue, latitude: lat.toString(), lngitude: lng.toString() })



        results[0].address_components.forEach(component => {
          const types = component.types;
          if (types.includes('route')) {
            street = component.long_name;
            bufferSetJobValue({ ...jobValue, street: e.target.value, userStreet: e.target.value })
          }
          if (types.includes('locality')) { 
            cityZip = component.long_name;
            bufferSetJobValue({ ...jobValue, city: e.target.value, userCity: e.target.value })
          }
          if (types.includes('country')) { 
            country = component.long_name;
            bufferSetJobValue({ ...jobValue, country: e.target.value, userCountry: e.target.value })
          }
        });
        
      } else {
        setLocationInfo('Address not found.');
      }
    });
  }, []);

  return (
    <div className="w-full">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={onMapClick}
        >
          {selectedLocation && (
            <Marker position={selectedLocation} />
          )}

          {selectedLocation && locationInfo && (
            <InfoWindow
              position={selectedLocation}
              onCloseClick={() => setSelectedLocation(null)}
            >
               <div className='text-gray-800'>
                <h3>Location Info</h3>
                <p>{locationInfo}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapWithLocationInfo;
