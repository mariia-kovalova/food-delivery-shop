import { useSelector } from 'react-redux';
import {
  selectUserAddress,
  selectUserEmail,
  selectUserId,
  selectUserName,
  selectUserNumber,
} from 'redux/user/selectors';

export const useUser = () => {
  const id = useSelector(selectUserId);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const number = useSelector(selectUserNumber);
  const address = useSelector(selectUserAddress);

  return {
    id,
    name,
    email,
    number,
    address,
  };
};
