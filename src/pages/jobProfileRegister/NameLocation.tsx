import { useEffect, useRef, useState } from 'react';
import Panel from 'src/components/common/Panel';
import { useSelector } from 'react-redux';
import TextInput from 'src/components/common/TextInput';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NameLocation = ({ appProfileValue, bufferSetAppProfileValue }) => {

  const { street, city, country } = appProfileValue
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null); // Track the marker

  const [open, setOpen] = useState(true);

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const locationYears = GroupData.filter(item => item.category === 'locationYears');
  // const selectedItem = locationYears.find(item => item._id === appProfileValue.selectedLocationYears);

  const handleSelection = (index) => {
    const selectedOption = locationYears[index];
    bufferSetAppProfileValue({ ...appProfileValue, selectedLocationYears: selectedOption._id });
  };

  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
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
        <span className="text-[18px] sm:text-[20px] font-bold text-[#33495E]">Address / Location</span>
        <TextInput
          name="street"
          type="text"
          label="Street Name*"
          value={appProfileValue.street}
          onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
          style="w-full"
        />

        <TextInput
          name="city"
          type="text"
          label="City Zip*"
          value={appProfileValue.city}
          onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
          style="w-full"
        />
        <TextInput
          name='country'
          type="text"
          label="Country*"
          value={appProfileValue.country}
          onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
          style="w-full"
        />
        <span className='font-bold'>Pinpoint Map Location( optional )</span>

        <div
          ref={mapContainerRef}
          style={{ width: '100%', height: '400px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
        </div>

        <div className="relative w-full border border-gray-200 rounded-[10px]">
          <div className='items-center border-b border-gray-200 rounded-t-[10px] bg-white text-[#33495E] sm:text-[26px] text-[20px] px-10 py-4 z-10 cursor-pointer relative flex justify-between items-start' onClick={() => setOpen(!open)}>
            <div>
              Years at this location (optional)
            </div>
            <p className=''>
              {open ? <ExpandMoreIcon fontSize="large" className="text-black" /> : <KeyboardArrowRightIcon fontSize="large" className="text-black" />}
            </p>
          </div>
          <div
            className={`bg-gray-100 left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[2000px]" : "max-h-0"}`}
          >
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {locationYears.map((option, index) => (
                <div
                  key={index}
                  className={`text-center rounded-lg p-4 cursor-pointer ${appProfileValue.selectedLocationYears === option._id ? 'bg-primaryBlue text-white' : 'bg-white text-primaryBlue'
                    }`}
                  onClick={() => handleSelection(index)}
                >
                  {option.string.trim()}
                </div>
              ))}
            </div>

          </div>
        </div>

      </Panel>
    </div>
  );
};

export default NameLocation;
