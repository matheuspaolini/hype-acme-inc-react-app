import { RootCSS, styled } from 'presentation/styles/stitches.config';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
} & RootCSS;

const StyledMain = styled('main', {
  paddingLeft: 24,
  paddingRight: 24,
});

export function Main({ children, rootCss }: Props) {
  return (
    <StyledMain css={{ ...rootCss }}>
      {children}
    </StyledMain>
  );
}
