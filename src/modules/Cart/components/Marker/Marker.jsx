import { useGoogleMap } from '@ubilabs/google-maps-react-hooks';
import { useEffect } from 'react';

export const Marker = ({ position, title }) => {
  const map = useGoogleMap();

  useEffect(() => {
    if (!map) return () => {};

    const marker = new window.google.maps.Marker({
      position,
      map,
      title,
      clickable: false,
    });

    return () => {
      marker.setMap(null);
    };
  }, [map, position, title]);

  return null;
};
