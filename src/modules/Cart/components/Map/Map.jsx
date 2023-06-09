import { useEffect, useMemo, useState } from 'react';
import { DirectionsRenderer, GoogleMap, Marker } from '@react-google-maps/api';
import { useUser } from 'hooks/useUser';
import { useCart } from 'hooks/useCart';
import { useDispatch } from 'react-redux';
import { setUserAddress, setUserLocation } from 'redux/user/slice';
import { DeliveryInfo, Wrap } from './Map.styled';
import { Location } from '../Location/Location';

const initValue = {
  map: null,
  dir: null,
  distance: '0 km',
  duration: '0 m',
};

export const Map = () => {
  const { address, user_location: destination } = useUser();
  const { user_id, store_location: origin } = useCart();
  const [map, setMap] = useState(/** @type google.maps.Map */ (initValue.map));
  const [directionsResponse, setDirectionsResponse] = useState(initValue.dir);
  const [distance, setDistance] = useState(initValue.distance);
  const [duration, setDuration] = useState(initValue.duration);

  const dispatch = useDispatch();

  const geocoder = useMemo(() => new window.google.maps.Geocoder(), []);

  useEffect(() => {
    if (!user_id) {
      const getLocation = ({ coords }) => {
        const location = {
          lat: coords.latitude,
          lng: coords.longitude,
        };
        dispatch(setUserLocation(location));

        geocoder.geocode({ location }, (results, status) => {
          if (status === 'OK' && results.length > 0) {
            const address = results[0].formatted_address || results[0].name;
            dispatch(setUserAddress(address));
          }
        });
      };

      navigator.geolocation.getCurrentPosition(getLocation);
    }
  }, [dispatch, geocoder, user_id]);

  useEffect(() => {
    const calculateRoute = async (origin, destination) => {
      if (!origin || !destination) return;

      const directionsService = new window.google.maps.DirectionsService();

      const results = await directionsService.route({
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      });

      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    };

    calculateRoute(origin, destination);

    return () => {
      setMap(initValue.map);
      setDirectionsResponse(initValue.dir);
      setDistance(initValue.distance);
      setDuration(initValue.duration);
    };
  }, [destination, origin]);

  const onMapClick = ({ latLng }) => {
    if (!latLng) return;

    const location = {
      lat: latLng.lat(),
      lng: latLng.lng(),
    };

    dispatch(setUserLocation(location));

    geocoder.geocode({ latLng }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const address = results[0].formatted_address || results[0].name;
        dispatch(setUserAddress(address));
      }
    });
  };

  return (
    <>
      <Wrap>
        <GoogleMap
          center={origin}
          zoom={11}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
          onLoad={map => setMap(map)}
          onClick={onMapClick}
        >
          <Marker position={origin} />
          {destination && <Marker position={destination} />}
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Wrap>
      <DeliveryInfo>
        <p>Distance: </p>
        <p>{distance}</p>
        <p>Duration: </p>
        <p>{duration}</p>
      </DeliveryInfo>
      <Location address={address} map={map} geocoder={geocoder} />
    </>
  );
};
