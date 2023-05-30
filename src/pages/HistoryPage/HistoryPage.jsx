import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from '@reduxjs/toolkit';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { schema } from './schema';
import { useEffect } from 'react';
import { useUser } from 'hooks/useUser';
import { getOrdersByFilter } from 'redux/orders/thunks';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { SearchInput } from 'shared/components/SearchInput';
import { Tooltip } from 'shared/components/ToolTip';
import { down } from 'shared/constants/tooltipPosition';
import { History } from 'modules/Histoty';
import { useOrders } from 'hooks/useOrders';
import { Info } from 'modules/Cart/components/CartItem/CartItem.styled';
import { Loader } from 'shared/components/Loader';
import { oops } from 'shared/constants/errorText';

const searchInput = {
  inputName: 'code',
  id: nanoid(),
};

const DELAY = 500;

const HistoryPage = () => {
  const { id: userId } = useUser();
  const { items, isLoading, error } = useOrders();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { [searchInput.inputName]: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (userId) dispatch(getOrdersByFilter({ id: userId }));
  }, [dispatch, userId]);

  const handleSearch = debounce(async ({ target }) => {
    const code = target.value.trim();
    if (code === '') return;
    dispatch(getOrdersByFilter({ id: userId, code }));
  }, DELAY);

  const showList = items.length > 0 && !isLoading && !error;
  const showEmpty = items.length < 0 && !isLoading && !error;
  const showError = !isLoading && error;

  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <Section>
        <Container>
          <Tooltip
            text="search by code"
            ariaLabel="search input"
            position={down}
          >
            <SearchInput
              id={searchInput.id}
              inputName={searchInput.inputName}
              register={register}
              errors={errors}
              onChange={handleSearch}
              placeholder="Search ..."
            />
          </Tooltip>
          {isLoading && <Loader />}
          {showList && <History items={items} />}
          {showEmpty && <Info> Your history is empty</Info>}
          {showError && <Info>{oops}</Info>}
        </Container>
      </Section>
    </>
  );
};

export default HistoryPage;
