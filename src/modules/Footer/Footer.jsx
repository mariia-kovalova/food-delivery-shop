import { Container } from 'shared/styles/components/Container.styled';
import { StyledDiv, StyledFooter } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledDiv>
          <p>© 2023 | All Rights Reserved</p>
          <div>
            <span> Developed by </span>
            <a
              href="https://github.com/mariia-kovalova"
              target="_blank"
              rel="noreferrer noopener nofollow"
              color="inherit"
            >
              Mariia Kovalova
            </a>
          </div>
        </StyledDiv>
      </Container>
    </StyledFooter>
  );
};
