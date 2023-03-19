import { styled } from 'presentation/styles/stitches.config';
import { ForwardedRef, forwardRef } from 'react';

type Props = {
  initial: string
}

const Container = styled('button', {
  fontSize: 20,
  color: '$White',

  width: 40,
  aspectRatio: 1,

  borderRadius: 40,

  background: '$Primary',

  transition: 0.15 + 's',

  '&:focus': {
    boxShadow: '$FocusRing',
  },

  '&:hover': {
    transform: 'scale(1.05)'
  },

  '&:active': {
    transform: 'scale(1.05) translateY(1px)'
  },

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export function AvatarComponent({ initial: initials }: Props, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <Container ref={ref}>
      {initials}
    </Container>
  );
}

export const Avatar = forwardRef(AvatarComponent);
