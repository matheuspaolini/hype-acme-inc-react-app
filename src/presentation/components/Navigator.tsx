import { CaretLeft } from 'phosphor-react';
import { RootCSS, styled } from 'presentation/styles/stitches.config';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  pageTitle?: string;
} & RootCSS;

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

const BackButton = styled('button', {
  fontSize: 24,
  fontWeight: '$Light',
  color: '$MediumGray',

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  borderRadius: 8,

  background: 'none',

  transition: 0.15 + 's',

  '&:focus': {
    boxShadow: '$FocusRing'
  },

  '&:hover': {
    color: '$DarkGray',
  }
});

const Separator = styled('span', {
  background: '$MediumGray',
  height: 40,
  width: 1,

  borderRadius: 4,
});

const Path = styled('div', {
  fontSize: 24,
  color: '$DarkGray',
});

export function Navigator({ pageTitle, rootCss }: Props) {
  const navigate = useNavigate();

  const goHome = () => navigate({ pathname: '/' }, { preventScrollReset: true });

  return (
    <Container css={{ ...rootCss }}>
      <BackButton onClick={goHome}>
        <CaretLeft size={24} />
        <span>Voltar</span>
      </BackButton>

      {pageTitle && (
        <Fragment>
          <Separator />

          <Path>{pageTitle}</Path>
        </Fragment>
      )}
    </Container>
  );
}
