import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export type StitchesCSS = Stitches.CSS<typeof config>;
export type RootCSS = { rootCss?: StitchesCSS; }

const convertToPixels = (value: number | string) => value.toString().replace('px', '');

export const { styled, globalCss, keyframes, config, theme } = createStitches({
  theme: {
    colors: {
      DarkGray: '#111111',
      MediumGray: '#A0A0A0',
      LowGray: '#F0F0F0',

      Primary: '#FF0303',
      PrimaryLow: '#FF2D2D',

      White: 'white',
    },

    fontWeights: {
      ExtraLight: 200,
      Light: 300,
      Regular: 400,
      Medium: 500,
    },

    shadows: {
      FocusRing: '0 0 0 3px #FF8787',
    },
  },

  media: {
    'small-screen': '(max-width: 500px)',
    'medium-screen': '(max-width: 800px)',
    'large-screen': '(max-width: 1024px)',
    'extra-large-screen': '(max-width: 1280px)',
  },

  utils: {
    paddingX: (value: string | number) => ({
      paddingRight: convertToPixels(value),
      paddingLeft: convertToPixels(value)
    }),
    paddingY: (value: string | number) => ({
      paddingTop: convertToPixels(value),
      paddingBottom: convertToPixels(value)
    }),
  }
});

export const useStitches = globalCss({
  '*': {
    margin: 0,
    padding: 0,

    boxSizing: 'border-box',

    fontFamily: 'Sarabun',
  },

  'body': {
    position: 'relative',
  },

  'html, body, #root': {
    height: '100%',
    width: '100%',
  },

  button: {
    cursor: 'pointer',
    border: 'none',

    outline: 'transparent',

    '&:disabled': {
      cursor: 'not-allowed',
    }
  },

  a: {
    textDecoration: 'none',
    color: 'currentColor',
    cursor: 'pointer',
  },

  li: {
    listStyle: 'none',
  }
});

export const animations = {
  slideAndfadeIn: keyframes({
    from: {
      opacity: 0,
      transform: 'translateX(-25px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    }
  }),

  fadeIn: keyframes({
    from: {
      opacity: 0,
      pointerEvents: 'none',
    },
    to: {
      opacity: 1,
      pointerEvents: 'all',
    }
  }),

  slideUp: keyframes({
    from: {
      bottom: '-100%',
    },
    to: {
      bottom: 0,
    }
  }),

  slideDown: keyframes({
    from: {
      bottom: 0,
    },
    to: {
      bottom: '-100%',
    }
  }),

  fadeInPopUp: keyframes({
    '0%': {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    '75%': {
      opacity: 1,
      transform: 'scale(1.025)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    }
  }),
}
