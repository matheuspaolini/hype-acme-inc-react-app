import { RootCSS, StitchesCSS, styled } from 'presentation/styles/stitches.config';
import { ButtonHTMLAttributes, ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

type Props = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & RootCSS;

const Container = styled('button', {
  minWidth: 48,
  aspectRatio: 1,

  background: '$LowGray',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 'none',
  borderRadius: 48,

  transition: 0.15 + 's',

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
});

function IconButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { children, rootCss, ...attributes } = props;

  return (
    <Container ref={ref} css={{ ...rootCss }} {...attributes}>
      {children}
    </Container>
  );
}

export const IconButton = forwardRef(IconButtonComponent);
