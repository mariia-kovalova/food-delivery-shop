import axios from 'axios';

axios.defaults.baseURL = 'https://6473b29bd784bccb4a3cda25.mockapi.io';

export const orders = {
  sendFirstOrder: async ({
    name,
    number,
    email,
    address,
    location,
    orders,
  }) => {
    const { data } = await axios.post('/orders', {
      name,
      email,
      number,
      address,
      location,
      orders,
    });

    return data;
  },
  sendOrderWithUserId: async ({
    id,
    name,
    number,
    email,
    address,
    location,
    orders,
  }) => {
    const { data } = await axios.put(`/orders/${id}`, {
      name,
      number,
      email,
      address,
      location,
      orders,
    });

    return data;
  },
  getOrdersByUserId: async id => {
    const { data } = await axios.get(`/orders/${id}`);

    return data;
  },
};
