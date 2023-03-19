import { styled } from 'presentation/styles/stitches.config';
import { Avatar } from './Avatar';

type Props = {
  name: string;
}

const Container = styled('div', {
  width: 'fit-content',

  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

const Greetings = styled('div', {
  width: 'fit-content',

  whiteSpace: 'nowrap',

  fontSize: 16,
  color: '$MediumGray',

  '@medium-screen': {
    display: 'none'
  }
});

const Bold = styled('b', {
  fontWeight: '$Medium',
  color: '$DarkGray',
});

export function GreetingsAvatar({ name }: Props) {
  const initial = name[0];

  return (
    <Container>
      <Avatar initial={initial} />
      <Greetings>
        Olá, <Bold>{name}!</Bold>
      </Greetings>
    </Container>
  );
}
