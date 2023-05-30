import { useState } from 'react';
import { Text, Trigger } from './ToolTip.styled';
import { up } from 'shared/constants/tooltipPosition';

export const Tooltip = ({
  text,
  ariaLabel = 'tooltip',
  position = up,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Trigger
        className="tooltip"
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        {children}
        {isVisible && (
          <Text aria-label={ariaLabel} position={position}>
            {text}
          </Text>
        )}
      </Trigger>
    </>
  );
};
