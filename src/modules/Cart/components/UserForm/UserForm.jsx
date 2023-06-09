import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { formId, inputs } from './inputs';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { useUser } from 'hooks/useUser';
import { FormFiled } from '../FormField/FormField';
import { List } from './UserForm.styled';
import { useCart } from 'hooks/useCart';
import { getOrderId } from 'shared/utils/getOrderId';
import { getCleanItems } from 'shared/utils/getCleanItems';
import { useOrders } from 'hooks/useOrders';
import { useDispatch } from 'react-redux';
import { sendFirstOrder, sendOrderWithUserId } from 'redux/orders/thunks';
import { toast } from 'react-toastify';

export const UserForm = () => {
  const user = useUser();
  const { orders } = useOrders();
  const { user_id, items, store_name, total_price } = useCart();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...getDefaultValues(inputs, user) },
  });

  const notify = () => toast.success('Your order has been successfully sent!');

  const onSubmit = async data => {
    const { address, user_location } = user;

    const newOrder = {
      info: { id: getOrderId(), store_name, total_price },
      items: getCleanItems(items),
    };

    const formData = {
      ...data,
      address,
      location: user_location,
      orders: [...orders, newOrder],
    };

    if (!user_id) {
      await dispatch(sendFirstOrder(formData))
        .unwrap()
        .then(() => notify());
    }

    if (user_id) {
      await dispatch(sendOrderWithUserId({ id: user_id, ...formData }))
        .unwrap()
        .then(() => notify());
    }
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
