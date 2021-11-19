import { styled } from '../stitches.config';

const Button = styled('button', {
  br: '$pill',
  p: '$2 $3',
  bc: 'white',
  fontFamily: '$mono',
  border: 'none',
  bs:
    '-15px 0 30px -10px var(--colors-orangeA7), 0 0 30px -10px var(--colors-pinkA7), 15px 0 30px -10px var(--colors-violetA7);',

  variants: {
    size: {
      small: {
        fontSize: '$2',
        height: '$3',
        px: '$2',
      },
      large: {
        fontSize: '$3',
        height: '$6',
        px: '$3',
      },
    },
    color: {
      primary: {
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
          bs:
            '-15px 0 30px -10px var(--colors-orangeA8), 0 0 30px -10px var(--colors-pinkA8), 15px 0 30px -10px var(--colors-violetA8)',
          color: 'black',
        },
      },
    },
  },
});

export { Button };
