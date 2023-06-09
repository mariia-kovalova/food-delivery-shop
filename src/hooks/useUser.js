import { useSelector } from 'react-redux';
import {
  selectUserAddress,
  selectUserEmail,
  selectUserLocation,
  selectUserName,
  selectUserNumber,
} from 'redux/user/selectors';

export const useUser = () => {
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const number = useSelector(selectUserNumber);
  const address = useSelector(selectUserAddress);
  const user_location = useSelector(selectUserLocation);

  return {
    name,
    email,
    number,
    address,
    user_location,
  };
};
