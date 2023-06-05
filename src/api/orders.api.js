import axios from 'axios';

axios.defaults.baseURL = 'https://6473b29bd784bccb4a3cda25.mockapi.io';

export const orders = {
  sendFirstOrder: async ({ name, email, phone, address, orders }) => {
    const { data } = await axios.post('/orders', {
      name,
      email,
      phone,
      address,
      orders,
    });

    return data;
  },
  sendOrderWithUserId: async ({ id, name, email, number, orders }) => {
    const { data } = await axios.put(`/orders/${id}`, {
      name,
      email,
      number,
      orders,
    });

    return data;
  },
  getOrdersByUserId: async id => {
    const { data } = await axios.get(`/orders/${id}`);

    return data;
  },
};
