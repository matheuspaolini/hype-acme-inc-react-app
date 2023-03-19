import { RootCSS, StitchesCSS, styled } from 'presentation/styles/stitches.config';
import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

type Props = {
  children?: ReactNode;

  rightAdornment?: ReactNode;
  leftAdornment?: ReactNode;
} & HTMLAttributes<HTMLButtonElement> & RootCSS;

const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,

  background: '$Primary',

  color: '$White',

  paddingRight: 28,
  paddingLeft: 28,

  transition: 0.15 + 's',

  minHeight: 48,
  height: 48,

  fontSize: 20,
  fontWeight: '$Medium',

  borderRadius: 32,

  '@small-screen': {
    fontSize: 14,
  },

  '&:focus': {
    boxShadow: '$FocusRing',
  },

  '&:hover': {
    background: '$PrimaryLow',
    transform: 'scale(1.05)'
  },

  '&:active': {
    transform: 'scale(1.05) translateY(1px)'
  }
});

const Left = styled('span', {
  display: 'flex',
  alignItems: 'center',
});

const Middle = styled('span', {
  display: 'flex',
  alignItems: 'center',
});

const Right = styled('span', {
  display: 'flex',
  alignItems: 'center',
});

function ButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { children, rightAdornment, leftAdornment, rootCss, ...attributes } = props;

  return (
    <Container ref={ref} css={{ ...rootCss }} {...attributes}>
      {leftAdornment && (
        <Left>{leftAdornment}</Left>
      )}

      <Middle>{children}</Middle>

      {rightAdornment && (
        <Right>{rightAdornment}</Right>
      )}
    </Container>
  );
}

export const Button = forwardRef(ButtonComponent);
