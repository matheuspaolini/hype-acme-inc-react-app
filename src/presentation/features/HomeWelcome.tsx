import { Fragment } from 'react';

import { ArrowRight, DiscordLogo, FacebookLogo, InstagramLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';

import { Box } from 'presentation/components/Box';
import { Button } from 'presentation/components/Button';
import { IconButton } from 'presentation/components/IconButton';
import { Spacer } from 'presentation/components/Spacer';
import { styled } from 'presentation/styles/stitches.config';

type Props = {
  productListScrollTrigger?: () => void;
}

const socialDataList = [
  {
    IconComponent: InstagramLogo,
    title: 'Instagram',
    url: 'instagramUrl',
  },
  {
    IconComponent: YoutubeLogo,
    title: 'Youtube',
    url: 'youtubeUrl',
  },
  {
    IconComponent: TwitterLogo,
    title: 'Twitter',
    url: 'twitterUrl',
  },
  {
    IconComponent: FacebookLogo,
    title: 'Facebook',
    url: 'facebookUrl',
  },
  {
    IconComponent: TiktokLogo,
    title: 'Tiktok',
    url: 'tikTokUrl',
  },
  {
    IconComponent: DiscordLogo,
    title: 'Discord',
    url: 'discordUrl',
  }
];

const socialDataListLenght = socialDataList.length;
const socialDataListLastIndex = socialDataListLenght - 1;

const Container = styled('div', {
  padding: 16,
});

const Title = styled('h1', {
  fontSize: 'clamp(32px, 4vw, 128px)',
  fontWeight: '$Light',
  maxWidth: '55%',

  textAlign: 'center',

  margin: '0 auto',

  '@medium-screen': {
    maxWidth: '70%',
  },

  '@small-screen': {
    maxWidth: '100%',
  },
});

const Mark = styled('b', {
  color: '$Primary',
  fontWeight: '$Medium',
});

const Paragraph = styled('p', {
  fontSize: 20,
  fontWeight: '$ExtraLight',
  color: '$MediumGray',

  textAlign: 'center',

  margin: '0 auto',

  maxWidth: '50%',

  '@medium-screen': {
    maxWidth: '70%',
  },

  '@small-screen': {
    maxWidth: '100%',
  }
});

const Bottom = styled('div', {
  width: 'fit-content',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SocialIcons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,

  flexWrap: 'wrap',
});

const DotSeparator = styled('span', {
  background: '#CCCCCC',

  minWidth: 4,
  width: 4,
  aspectRatio: 1,
});

export function HomeWelcome({ productListScrollTrigger }: Props) {
  return (
    <Container>
      <Spacer yAxis={160} />

      <Title>
        Realizar <Mark>suas compras</Mark> nunca foi tão fácil!
      </Title>

      <Spacer yAxis={8} />

      <Paragraph>
        Com nossa plataforma de compras online intuitiva,
        você pode encontrar facilmente os produtos que procura
        e finalizar sua compra em poucos cliques.
      </Paragraph>

      <Spacer yAxis={32} />

      <Button
        onClick={productListScrollTrigger}
        rightAdornment={<ArrowRight size={24} color="#fafafa" />}
        rootCss={{ margin: '0 auto' }}
      >
        Ver Produtos
      </Button>

      <Spacer yAxis={120} />

      <Bottom>
        <Box as="p" css={{ fontSize: 20, fontWeight: '$ExtraLight', color: '$MediumGray' }}>
          Nossas redes oficiais
        </Box>

        <Spacer yAxis={12} />

        <SocialIcons>
          {socialDataList.map(({ IconComponent, title }, index) =>
            <Fragment key={title}>
              <IconButton rootCss={{ color: '$Primary' }} title={title}>
                <IconComponent size={24} weight="fill" />
              </IconButton>

              {index < socialDataListLastIndex && <DotSeparator />}
            </Fragment>
          )}
        </SocialIcons>
      </Bottom>
    </Container>
  );
}
