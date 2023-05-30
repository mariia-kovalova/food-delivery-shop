import { useEffect, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from '@reduxjs/toolkit';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { useUser } from 'hooks/useUser';
import { getOrdersByUserId } from 'redux/orders/thunks';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { SearchInput } from 'shared/components/SearchInput';
import { History } from 'modules/Histoty';
import { useOrders } from 'hooks/useOrders';
import { Loader } from 'shared/components/Loader';
import { oops } from 'shared/constants/errorText';
import { Info } from 'pages/CartPage/CartPage.styled';
import { schema } from './schema';
import { Wrap } from './HistoryPage.stled';

const searchInput = {
  inputName: 'code',
  id: nanoid(),
};

const DELAY = 500;

const HistoryPage = () => {
  const { id: userId } = useUser();
  const [code, setCode] = useState('');
  const { items, isLoading, error } = useOrders();
  const dispatch = useDispatch();

  const filteredItems = useMemo(
    () =>
      code
        ? items.filter(item => item.info.id.toString().includes(code))
        : items,
    [code, items]
  );

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { [searchInput.inputName]: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (userId) dispatch(getOrdersByUserId({ id: userId }));
  }, [dispatch, userId]);

  const handleSearch = debounce(async ({ target }) => {
    const code = target.value.trim();
    setCode(code);
  }, DELAY);

  const showList = items.length > 0 && !isLoading && !error;
  const showEmpty = items.length === 0 && !isLoading && !error;
  const showError = !isLoading && error;

  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {showList && (
            <>
              <Wrap>
                <SearchInput
                  id={searchInput.id}
                  inputName={searchInput.inputName}
                  register={register}
                  errors={errors}
                  onChange={handleSearch}
                  placeholder="Search by order code..."
                />
              </Wrap>
              <History items={filteredItems} />
            </>
          )}
          {showEmpty && <Info>Your history is empty</Info>}
          {showError && <Info>{oops}</Info>}
        </Container>
      </Section>
    </>
  );
};

export default HistoryPage;
