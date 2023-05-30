import { NavBar } from './components/NavBar/NavBar';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { Container } from 'shared/styles/components/Container.styled';
import { StyledDiv, Wrap } from './Header.styled';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { Logo } from './components/Logo/Logo';

export const Header = () => {
  return (
    <header>
      <Container>
        <StyledDiv>
          <Logo />
          <Wrap>
            <ThemeToggler />
            <NavBar />
            <MobileMenu />
          </Wrap>
        </StyledDiv>
      </Container>
    </header>
  );
};
