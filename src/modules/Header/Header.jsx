import { NavBar } from './components/NavBar/NavBar';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { Container } from 'shared/styles/components/Container.styled';
import { StyledDiv } from './Header.styled';
import { MobileMenu } from './components/MobileMenu/MobileMenu';

export const Header = () => {
  return (
    <header>
      <Container>
        <StyledDiv>
          <div>
            <NavBar />
            <MobileMenu />
          </div>
          <div>
            <ThemeToggler />
          </div>
        </StyledDiv>
      </Container>
    </header>
  );
};
