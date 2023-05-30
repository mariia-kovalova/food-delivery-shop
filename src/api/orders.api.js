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
  getOrdersByFilter: async ({ id: userId, code }) => {
    const { data } = await axios.get(`/orders/${userId}`, {
      params: { id: code },
    });

    return data;
  },
  getOrdersByFilterWithPagination: async ({ id, field_name, page, limit }) => {
    const { data } = await axios.get(`/orders/${id}`, {
      params: { field_name, page, limit },
    });

    return data;
  },
};
