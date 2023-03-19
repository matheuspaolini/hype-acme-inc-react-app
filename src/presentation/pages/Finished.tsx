import { CaretLeft, CheckCircle } from 'phosphor-react';
import { Spacer } from 'presentation/components/Spacer';
import { Main } from 'presentation/layouts/Main';
import { animations, styled } from 'presentation/styles/stitches.config';
import { Link } from 'react-router-dom';

const Contaier = styled('div', {
  width: '100%',
  maxWidth: 1080,
  minHeight: 540,

  margin: '0 auto',

  color: '$Primary',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8
});

const Message = styled('h1', {
  fontSize: 'clamp(32px, 4vw, 40px)',
  textAlign: 'center',
});

const BackHome = styled('span', {
  fontSize: 'clamp(16px, 1.75vw, 24px)',
  color: '$DarkGray',

  display: 'flex',
  alignItems: 'center',
  gap: 8
});

export function FinishedPage() {
  return (
    <Main>
      <Contaier css={{ animation: `${animations.fadeInPopUp} 0.75s ease forwards`, opacity: 0 }}>
        <CheckCircle size={240} color="currentColor" weight="fill" />

        <Message>
          Seu pedido foi finalizado com sucesso!
        </Message>

        <Spacer yAxis={24} />

        <Link to="/" replace>
          <BackHome>
            <CaretLeft size={20} weight="fill" />
            <span>Voltar à página inicial</span>
          </BackHome>
        </Link>
      </Contaier>
    </Main>
  );
}
