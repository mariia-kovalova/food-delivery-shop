import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setUserAddress, setUserLocation } from 'redux/user/slice';
import { Autocomplete } from '@react-google-maps/api';
import { Field, Input, Label } from './Location.styled';

const inputId = nanoid();

export const Location = ({ address, map }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(address);

    return () => setAutocomplete(null);
  }, [address]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value.trim());
  };

  const onLoad = autocomplete => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    const place = autocomplete && autocomplete.getPlace();

    if (!place) return;

    const address = place.formatted_address;

    if (!address) {
      dispatch(setUserLocation(null));
      dispatch(setUserAddress(place.name));
    }

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    map && map.panTo({ lat, lng });
    dispatch(setUserLocation({ lat, lng }));
    dispatch(setUserAddress(address));
  };

  return (
    <Field>
      <Label htmlFor={inputId}>Address</Label>
      <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
        <Input
          id={inputId}
          name="address"
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter address"
          required
        />
      </Autocomplete>
    </Field>
  );
};
