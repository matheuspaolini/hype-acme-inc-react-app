import { _showBottomScreenPricePreviewAtom } from 'presentation/layouts/BottomScreenPricePreview';
import { AcmeIncLogo } from 'presentation/components/AcmeIncLogo';
import { Box } from 'presentation/components/Box';
import { Button } from 'presentation/components/Button';
import { Spacer } from 'presentation/components/Spacer';
import { styled } from 'presentation/styles/stitches.config';
import { openInNewTab } from 'presentation/utils/open-in-new-tab';

import { useAtomValue } from 'jotai';

import { ArrowSquareOut } from 'phosphor-react';

const Container = styled('footer', {
  width: '100%',
  height: 300,

  borderTopWidth: 2,
  borderTopColor: '$LowGray',
  borderTopStyle: 'solid',

  background: '$White',

  padding: '48px 0',
});

const Center = styled('div', {
  width: '100%',
  maxWidth: 540,
  height: '100%',

  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  justifyContent: 'center',
  '@small-screen': {
    flexDirection: 'column'
  }
})

const RepositoryAnchor = styled('a', {
  color: '$DarkGray',
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  borderRadius: 4,

  padding: 4,

  outline: 'transparent',

  '&:focus': {
    boxShadow: '$FocusRing'
  }
});

export function Footer() {
  const showBottomScreenPricePreviewAtom = useAtomValue(_showBottomScreenPricePreviewAtom);

  // To Do: Remove hardcoded URL
  const goToLiveDemo = () => openInNewTab('https://hype-acme-inc-react-app.vercel.app/');

  return (
    <Container
      css={{
        paddingBottom: showBottomScreenPricePreviewAtom ? 160 : 48,
        height: showBottomScreenPricePreviewAtom ? 'unset' : 'fit-content',
      }}
    >
      <Center>
        <AcmeIncLogo />
        <Spacer yAxis={16} />
        <Box css={{ fontSize: 20, color: '$MediumGray', textAlign: 'center' }}>
          Desenvolvidor por Matheus Paolini
        </Box>

        <Spacer yAxis={16} />

        <Wrapper>
          <Button onClick={goToLiveDemo} rightAdornment={<ArrowSquareOut size={24} />}>
            Live Demo
          </Button>

          {/* To Do: Remove hardcoded URL */}
          <RepositoryAnchor href="https://github.com/matheuspaolini/hype-acme-inc-react-app" target="_blank" referrerPolicy="no-referrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z" />
            </svg>
            <Box as="span" css={{ fontWeight: '$Medium' }}>GitHub Repo</Box>
          </RepositoryAnchor>
        </Wrapper>
      </Center>
    </Container>
  );
}
