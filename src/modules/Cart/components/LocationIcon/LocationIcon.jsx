import { Icon } from './LocationIcon.styled';
import sprite from 'shared/icons/sprite.svg';

export const LocationIcon = () => {
  return (
    <Icon>
      <use href={`${sprite}#icon-location-dot-solid`} />
    </Icon>
  );
};
