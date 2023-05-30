import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { formId, inputs } from './inputs';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { useUser } from 'hooks/useUser';
import { FormFiled } from './components/FormField/FormField';
import { List } from './UserForm.styled';
import { useCart } from 'hooks/useCart';
import { useEffect, useState } from 'react';
import { useOneStore } from 'hooks/useOneStore';
import { getOrderId } from 'shared/utils/getOrderId';
import { getCleanItems } from 'shared/utils/getCleanItems';
import { useOrders } from 'hooks/useOrders';
import { useDispatch } from 'react-redux';
import { sendFirstOrder, sendOrderWithUserId } from 'redux/orders/thunks';

export const UserForm = () => {
  const { id } = useUser();
  const { items } = useCart();
  const { store_name } = useOneStore();
  const { items: orders } = useOrders();
  const [total_price, setTotalPrice] = useState(0);
  const user = useUser();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: getDefaultValues(inputs, user),
  });

  useEffect(() => {
    const price = items.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    setTotalPrice(price);
  }, [items]);

  const onSubmit = async data => {
    const newOrder = {
      info: { id: getOrderId(), store_name, total_price },
      items: getCleanItems(items),
    };
    const formData = { ...data, orders: [...orders, newOrder] };

    if (!id) {
      dispatch(sendFirstOrder(formData));
    }
    if (id) {
      dispatch(sendOrderWithUserId({ ...formData, id }));
    }

    // reset();
  };

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <List>
        {inputs.map(input => (
          <li key={input.id}>
            <FormFiled {...input} register={register} errors={errors} />
          </li>
        ))}
      </List>
    </form>
  );
};
