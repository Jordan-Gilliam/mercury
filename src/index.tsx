import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export { Card } from './components/Card';
export { Button } from './components/Button';
export { Flex } from './components/Flex';
export { Grid } from './components/Grid';
export { Heading } from './components/Heading';
export { Text } from './components/Text';
export { Container } from './components/Container';
export { DesignSystemProvider } from './components/DesignSystemProvider';

// Stitches
export {
  styled,
  css,
  theme,
  createTheme,
  darkTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
} from './stitches.config';
