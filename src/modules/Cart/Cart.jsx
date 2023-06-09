import { Map } from './components/Map/Map';
import { UserForm } from './components/UserForm/UserForm';
import { CartList } from './components/CartList/CartList';
import { Submit } from './components/Submit/Submit';
import { Wrap } from './Cart.styled';
import { useJsApiLoader } from '@react-google-maps/api';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const KEY = process.env.REACT_APP_GOOGLE_MAPS_API ?? '';
const libraries = ['places'];

export const Cart = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: KEY,
    libraries,
    language: 'en',
  });

  useEffect(() => {
    if (!KEY)
      toast.warning(
        'Google Maps API key is missing. The cart will not work correctly until you provide the key.'
      );
  }, []);

  return (
    <Wrap>
      <div className="form">
        {isLoaded && <Map />}
        {!isLoaded && <div>Loading...</div>}
        <UserForm />
      </div>
      <div className="cart">
        <CartList />
      </div>
      <div className="submit">
        <Submit />
      </div>
    </Wrap>
  );
};
