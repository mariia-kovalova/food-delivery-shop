import { Dna } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <Dna visible={true} height="20%" width="20%" ariaLabel="dna-loading" />
    </Overlay>
  );
};
