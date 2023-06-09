import { useEffect, useState } from 'react';
import { useDirectionsService } from '@ubilabs/google-maps-react-hooks';
import { useUser } from 'hooks/useUser';
import { useCart } from 'hooks/useCart';
import { Wrap } from './Directions.styled';

const directionsOptions = {
  renderOnMap: true,
  renderOptions: {
    suppressMarkers: true,
    polylineOptions: { strokeColor: '#FB2576', strokeWeight: 4 },
  },
};

export const Directions = () => {
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const { user_location } = useUser();
  const { store_location } = useCart();

  const { findAndRenderRoute, directionsRenderer } =
    useDirectionsService(directionsOptions);

  useEffect(() => {
    if (!findAndRenderRoute) return () => {};

    const getDirections = async () => {
      const request = {
        travelMode: window.google.maps.TravelMode.DRIVING,
        origin: store_location,
        destination: user_location,
        drivingOptions: {
          departureTime: new Date(),
          trafficModel: window.google.maps.TrafficModel.BEST_GUESS,
        },
      };

      const results = await findAndRenderRoute(request);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    };

    getDirections();

    return () => directionsRenderer && directionsRenderer.setMap(null);
  }, [directionsRenderer, findAndRenderRoute, store_location, user_location]);

  return (
    <Wrap>
      <p>Distance: </p>
      <p>{distance}</p>
      <p>Duration: </p>
      <p>{duration}</p>
    </Wrap>
  );
};
