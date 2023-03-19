import { RootCSS, styled } from 'presentation/styles/stitches.config';
import { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef, useCallback, useState } from 'react';

type Props = {
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;

  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & RootCSS;

const Container = styled('button', {
  position: 'relative',

  width: 280,
  minHeight: 48,
  height: 48,

  padding: 12,

  transition: 0.15 + 's',

  background: '$LowGray',

  borderRadius: 40,

  display: 'flex',
  alignItems: 'center',

  paddingLeft: 32,

  fontSize: 16,
  fontWeight: '$Light',

  color: '$MediumGray',

  '&:focus': {
    boxShadow: '$FocusRing',
  },

  '&:hover': {
    transform: 'scale(1.05)'
  },

  '&:active': {
    transform: 'scale(1.05) translateY(1px)'
  },

  '&::before': {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: 'translateY(-50%)',

    borderRadius: 8,

    minWidth: 12,
    width: 12,
    aspectRatio: 1,

    background: 'currentColor',

    content: ''
  }
});

export function ToggleButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { children, initialValue = false, onToggle, rootCss, ...attributes } = props;

  const [_isActive, _setIsActive] = useState(initialValue);

  const handleToggle = useCallback(() => {
    const nextState = !_isActive

    _setIsActive(nextState);

    if (onToggle) onToggle(nextState);
  }, [_isActive, onToggle]);

  return (
    <Container
      ref={ref}
      onClick={handleToggle}
      css={{
        color: _isActive ? '$PrimaryLow' : '$MediumGray',
        width: children ? 280 : 24,
        paddingLeft: children ? 32 : 28,
        '&::before': {
          left: children ? 12 : 14,
        },
        ...rootCss
      }}
      {...attributes}
    >
      {children}
    </Container>
  );
}

export const ToggleButton = forwardRef(ToggleButtonComponent);
