import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { useOrders } from 'hooks/useOrders';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import debounce from 'lodash.debounce';
import { DELAY } from 'shared/constants/serachInputsParams';
import { searchInput } from './inputs';

import { oops } from 'shared/constants/errorText';
import { SearchInput } from 'shared/components/SearchInput';
import { History } from 'modules/Histoty';
import { Loader } from 'shared/components/Loader';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { Wrap } from './HistoryPage.stled';
import { Info } from 'shared/styles/components/Info';

const HistoryPage = () => {
  const [code, setCode] = useState('');
  const { orders, isLoading, error } = useOrders();

  const filteredOrders = useMemo(
    () =>
      code
        ? orders.filter(item => item.info.id.toString().includes(code))
        : orders,
    [code, orders]
  );

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { [searchInput.inputName]: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSearch = debounce(async ({ target }) => {
    const code = target.value.trim();
    setCode(code);
  }, DELAY);

  const showList = orders.length > 0 && !isLoading && !error;
  const showEmpty = orders.length === 0 && !isLoading && !error;
  const showError = !isLoading && error;
  const showNoResults = filteredOrders.length === 0;

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
              <History orders={filteredOrders} />
              {showNoResults && <Info>Order #{code} was not found</Info>}
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
