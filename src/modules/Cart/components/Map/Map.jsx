// import { useUser } from 'hooks/useUser';
// import { useCart } from 'hooks/useCart';

// import { useDispatch } from 'react-redux';
// import { setUserLocation } from 'redux/user/slice';

// const { user_location } = useUser();
// const { store_location } = useCart();

// const dispatch = useDispatch();

// const POLTAVA = { coords: { latitude: 49.59373, longitude: 34.54073 } };
//  const [position, setPosition] = useState(POLTAVA);
//  useEffect(() => {
//    navigator.geolocation.getCurrentPosition(setPosition);
//  }, []);

//  useEffect(() => {
//    const {
//      coords: { latitude, longitude },
//    } = position;

//    dispatch(setUserLocation({ latitude, longitude }));
//  }, [dispatch, position]);

// const showForm = isLoaded && !loadError;
// const showFormError = isLoaded && loadError;

import React, { useState, useEffect, useRef } from 'react';

import { GoogleMap } from './Map.styled';
import {
  GoogleMapsProvider,
  useAutocomplete,
  useGeocodingService,
  useGoogleMap,
} from '@ubilabs/google-maps-react-hooks';

const mapOptions = {
  zoom: 12,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
};

// const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const KEY = '';

const libraries = ['places'];

export const Map = () => {
  const [mapContainer, setMapContainer] = useState(null);

  return (
    <GoogleMapsProvider
      googleMapsAPIKey={KEY}
      mapOptions={mapOptions}
      mapContainer={mapContainer}
      libraries={libraries}
    >
      <GoogleMap ref={node => setMapContainer(node)} />
      <Location />
    </GoogleMapsProvider>
  );
};

function Location() {
  const [place, setPlace] = useState('');
  const map = useGoogleMap();
  const geocoder = useGeocodingService();
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (place) {
      geocoder.geocode({ address: place }, (results, status) => {
        if (status === 'OK' && results.length > 0) {
          const location = results[0].geometry.location;
          const lat = location.lat();
          const lng = location.lng();
          map.panTo({ lat, lng });
          console.log({ lat, lng });
        }
      });
    }
  }, [geocoder, map, place]);

  const onPlaceChanged = place => {
    if (place) {
      setPlace(place.formatted_address || place.name);
    }
    // Keep focus on input element
    autocompleteRef.current && autocompleteRef.current.focus();
  };

  useAutocomplete({
    inputField: autocompleteRef && autocompleteRef.current,
    onPlaceChanged,
  });

  const handleInputChange = event => {
    setPlace(event.target.value);
  };

  return (
    <input
      ref={autocompleteRef}
      value={place}
      onChange={handleInputChange}
      placeholder="Enter address"
    />
  );
}

// export const addressInput = {
//   inputName: 'address',
//   type: 'text',
//   id: nanoid(),
//   label: 'Address',
//   placeholder: 'Enter address',
// };
