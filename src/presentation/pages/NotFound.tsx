import { Box } from 'presentation/components/Box';
import { styled } from 'presentation/styles/stitches.config';
import { Link } from 'react-router-dom';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,

  fontSize: 32,

  color: '$DarkGray',

  height: 480,

  width: '100%',
});

export function NotFoundPage() {
  return (
    <Container>
      Página não encontrada

      <Link to="/" replace>
        <Box as="small" css={{ fontSize: 20, color: '$MediumGray' }}>Voltar à página inicial</Box>
      </Link>
    </Container>
  )
}
