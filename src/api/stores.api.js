import axios from 'axios';

axios.defaults.baseURL = 'https://6473b29bd784bccb4a3cda25.mockapi.io';

export const getStores = async () => {
  const { data } = await axios.get('/stores');

  return data;
};
