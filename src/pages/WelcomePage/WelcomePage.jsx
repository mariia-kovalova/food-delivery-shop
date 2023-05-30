import { Container } from 'shared/styles/components/Container.styled';
import { StyledLink, Svg, Wrap } from './WelcomePage.styled';
import { Section } from 'shared/styles/components/Section.styled';
import sprite from 'shared/icons/sprite.svg';
import { shop } from 'shared/constants/routes';

const WelcomePage = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <h1>Welcome to your Food Delivery App</h1>
          <p>Delicious meals form everyone</p>
        </Wrap>
        <StyledLink to={shop}>
          <span>Find a meal</span>
          <Svg width="20" height="20">
            <use href={`${sprite}#icon-arrow-right-small`} />
          </Svg>
        </StyledLink>
      </Container>
    </Section>
  );
};

export default WelcomePage;
