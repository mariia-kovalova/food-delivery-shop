import { useSelector } from 'react-redux';
import {
  selectUserAddress,
  selectUserEmail,
  selectUserId,
  selectUserLocation,
  selectUserName,
  selectUserNumber,
} from 'redux/user/selectors';

export const useUser = () => {
  const id = useSelector(selectUserId);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const number = useSelector(selectUserNumber);
  const address = useSelector(selectUserAddress);
  const user_location = useSelector(selectUserLocation);

  return {
    id,
    name,
    email,
    number,
    address,
    user_location,
  };
};
