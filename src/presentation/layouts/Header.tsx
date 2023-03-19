import { styled } from 'presentation/styles/stitches.config';
import { AcmeIncLogo } from '../components/AcmeIncLogo';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'presentation/hooks/use-window-size';
import { HeaderCartIconButton } from '../components/HeaderCartIconButton';
import { GreetingsAvatar } from '../components/GreetingsAvatar';

const containerPadding = 24;

const Container = styled('header', {
  maxWidth: 1080 + containerPadding + containerPadding,
  height: 100,

  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  paddingLeft: containerPadding,
  paddingRight: containerPadding,
});

const LeftNav = styled('nav', {
  display: 'flex',
  alignItems: 'center',

  gap: 48,
});

const AnchorList = styled('ul', {
  width: '100%',

  display: 'flex',
  gap: 48,
});

const Anchor = styled('span', {
  position: 'relative',

  fontSize: 20,
  color: '$MediumGray',

  '&:hover': {
    transform: 'scale(1.1)'
  },

  '&:focus': {
    boxShadow: '$FocusRing',
  },

  variants: {
    isActive: {
      true: {
        color: '$DarkGray',

        '&::after': {
          position: 'absolute',
          bottom: -12,
          left: '50%',
          transform: 'translate(-50%)',

          content: '',

          width: 4,
          height: 4,

          borderRadius: 8,

          background: '$DarkGray'
        }
      }
    }
  }
});

const RightNav = styled('nav', {
  display: 'flex',
  alignItems: 'center',

  gap: 16,
});

export function Header() {
  const { innerWidth } = useWindowSize();

  const isMediumScreen = innerWidth && innerWidth >= 768;

  const acmeIncLogoSize = isMediumScreen ? 32 : 24;

  return (
    <Container>
      <LeftNav>
        <AcmeIncLogo size={acmeIncLogoSize} />

        {isMediumScreen && (
          <AnchorList>
            <li>
              <Link to="/">
                <Anchor isActive>Home</Anchor>
              </Link>
            </li>

            <li>
              <Link to="/">
                <Anchor>Blog</Anchor>
              </Link>
            </li>

            <li>
              <Link to="/">
                <Anchor>Sobre</Anchor>
              </Link>
            </li>
          </AnchorList>
        )}
      </LeftNav>

      <RightNav>
        <HeaderCartIconButton />
        <GreetingsAvatar name="Usuário" />
      </RightNav>
    </Container>
  );
}
