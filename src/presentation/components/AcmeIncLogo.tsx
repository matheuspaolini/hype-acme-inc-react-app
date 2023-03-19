import { styled } from 'presentation/styles/stitches.config';

type Props = {
  size?: number;
}

const Container = styled('div', {
  fontSize: 32,
  fontWeight: '$Medium',
  color: '$Primary',

  whiteSpace: 'nowrap',

  transition: 0.15 + 's',
});

export function AcmeIncLogo({ size = 32 }: Props) {
  return (
    <Container css={{ fontSize: size }}>
      ACME Inc.
    </Container>
  );
}
