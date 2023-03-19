import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { RootCSS, StitchesCSS, styled } from 'presentation/styles/stitches.config';

type Props = {
  value?: string;

  leftAdornment?: ReactNode;
} & HTMLAttributes<HTMLInputElement> & RootCSS;

const Container = styled('div', {
  width: 280,
  minHeight: 48,
  height: 48,

  background: '$LowGray',

  borderRadius: 48,

  color: '$MediumGray',

  display: 'flex',
  alignItems: 'center',

  transition: 0.15 + 's',

  '&:focus-within': {
    boxShadow: '$FocusRing',
  }
});

const Left = styled('span', {
  paddingLeft: 12,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledInput = styled('input', {
  width: '100%',
  height: '100%',

  background: 'none',

  borderRadius: 48,

  padding: 8,

  color: 'currentColor',

  outline: 'transparent',

  fontWeight: '$ExtraLight',
  fontSize: 20,

  border: 'none',

  '&:not(:placeholder-shown)': {
    color: '$DarkGray'
  }
});

export function InputComponent(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  const { rootCss, leftAdornment, value, ...attributes } = props;

  return (
    <Container css={{ ...rootCss }}>
      {leftAdornment && (
        <Left>{leftAdornment}</Left>
      )}

      <StyledInput
        ref={ref}
        value={value}
        css={{ paddingLeft: leftAdornment ? 8 : 12 }}
        {...attributes}
      />
    </Container>
  );
}

export const Input = forwardRef(InputComponent);
