import { styled } from '../stitches.config';

export const Button = styled('button', {
  br: '$pill',
  p: '$2 $3',
  bg: 'white',
  fontFamily: '$mono',
  border: 'none',
  boxShadow:
    '-15px 0 30px -10px var(--colors-orangeA7), 0 0 30px -10px var(--colors-pinkA7), 15px 0 30px -10px var(--colors-violetA7);',

  variants: {
    size: {
      small: {
        fontSize: '$2',
        height: '$3',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      large: {
        fontSize: '$5',
        height: '$6',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
    color: {
      primary: {
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
          boxShadow:
            '-15px 0 30px -10px var(--colors-orangeA8), 0 0 30px -10px var(--colors-pinkA8), 15px 0 30px -10px var(--colors-violetA8)',
          color: 'black',
        },
      },
    },
  },
});
