import { StyledH1, StyledText, Wrap } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Wrap>
      <StyledH1>Welcome to your Food Delivery App</StyledH1>
      <StyledText>Choose a shop to find your delicious meal</StyledText>
    </Wrap>
  );
};

export default WelcomePage;
