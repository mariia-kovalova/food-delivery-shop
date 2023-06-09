import { Helmet } from 'react-helmet-async';
import { useOrders } from 'hooks/useOrders';
import { oops } from 'shared/constants/errorText';
import { History } from 'modules/Histoty';
import { Loader } from 'shared/components/Loader';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { Info } from 'shared/styles/components/Info';

const HistoryPage = () => {
  const { orders, isLoading, error } = useOrders();

  const showList = orders.length > 0 && !isLoading && !error;
  const showEmpty = orders.length === 0 && !isLoading && !error;
  const showError = !isLoading && error;

  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {showList && <History orders={orders} />}
          {showEmpty && <Info>Your history is empty</Info>}
          {showError && <Info>{oops}</Info>}
        </Container>
      </Section>
    </>
  );
};

export default HistoryPage;
